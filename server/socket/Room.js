const genId = require('./id')
const {EVENT, ACTIONS} = require('../../constants/socket')
const state = {
  PREGAME: 'PREGAME',
  INGAME: 'INGAME',
  PAUSED: 'PAUSED',
  FINISHED: 'FINISHED'
}

module.exports = io => {
  class Room {
    constructor({gameName, teamCount}) {
      this.host = {} // socket obj
      this.teams = {} // map of [socket.id] -> socket
      this.name = gameName // user chosen room identifier
      this.id = genId() // unique number to identify room
      this.teamCount = teamCount
      this.uniqueName = `room-#${this.id}` // string for sockets to join
      this.state = state.PREGAME

      console.log(`${this.uniqueName} (AKA ${this.name}) has been created!`)
    }

    addHost(socket) {
      console.log(`${socket.id} is now host of ${this.uniqueName}`)
      this.host = socket // do exactly what we need
      socket.data.room = this // we'll need this later

      socket.join(this.uniqueName) // host should be aware of updates in their room
    }

    addPlayer(socket) {
      if (!this.host.id) {
        this.addHost(socket)
        return
      }
      const numTeams = Object.keys(this.teams).length
      const canAddTeam = numTeams < this.size
      // if we're full or ingame, just send an error
      if (!canAddTeam || this.state === state.INGAME) {
        socket.emit(EVENT.ERROR, {
          redirect: '/',
          message: 'That Jeopardy lobby is full or in progress!'
        })
      }
      this.teams[socket.id] = socket // save them here

      socket.join(this.uniqueName) // listen to future updates
      socket.data.room = this // quick lookup for later
      socket.data.timeJoinedRoom = Date.now() // presentation order
      socket.emit(ACTIONS.ROOM_JOIN.RES, this.expandedInfo()) // tell the client they joined!
      // tell everyone else in the room that they joined
      socket
        .to(this.uniqueName)
        .emit(EVENT.ROOM_PLAYER_JOIN, this.expandedInfo())
    }

    updateState(newState) {
      // if it's not an 'enum', just don't bother
      if (!state[newState]) {
        console.log(
          `ERROR: TRYING TO SET INVALID GAME STATE (${newState}) on ${
            this.uniqueName
          }`
        )
        return
      }
      this.state = newState
      io.to(this.uniqueName).emit(EVENT.ROOM_STATE_CHANGE, newState)
    }

    // returns true if no more players in room
    // false otherwise
    // if empty, need to be deleted manually and everyone informed
    // this only informs if <0 players in room
    removePlayer(socket) {
      const isPlayer = this.teams[socket.id] !== undefined
      const isHost = this.host.id === socket.id
      if (isPlayer) {
        // GET OUTTA HERE
        delete this.teams[socket.id]

        if (this.state === state.INGAME) {
          // if game is in progress, then we probably should pause
          this.updateState(state.PAUSED)
        } else if (this.state === state.FINISHED) {
          // if we're finished, we're pretty much done here
          // don't need anything special
        }
      }
      // if host is leaving, we should probably pause because some shit is going on
      if (isHost) {
        this.updateState(state.PAUSED)
      }

      socket.leave(this.uniqueName)
      delete socket.data.room
      delete socket.data.timeJoinedRoom
      // tell everyone else that in the room that someone left
      socket
        .to(this.uniqueName)
        .emit(EVENT.ROOM_PLAYER_LEAVE, this.playerInfo())
      return Object.keys(this.teams).length === 0
    }

    // will try to begin the game. either from pregame or paused
    attemptToStart(socket) {
      // can only start a game if it's in the
      // pregame or paused state so stop anything else
      if (this.state !== state.PREGAME && this.state !== state.PAUSED) {
        return
      }
      // only the host can start the game
      if (this.host.id !== socket.id) {
        return
      }
      if (!this.game) {
        // TODO fill this out and the func below
      }

      this.updateState(state.INGAME)
    }

    createGame() {}

    expandedInfo() {
      return {
        id: this.id,
        name: this.name,
        state: this.state,
        teamCount: this.teamCount,
        ...this.playerInfo()
      }
    }

    playerInfo() {
      return {
        teams: Object.values(this.teams).map(v => ({
          teamName: v.data.teamName
        })),
        host: {
          id: this.host.id
        }
      }
    }

    basicInfo() {
      return {
        id: this.id,
        name: this.name,
        state: this.state,
        size: this.size,
        playerCount: Object.keys(this.players).length,
        spectatorCount: Object.keys(this.spectators).length
      }
    }
  }

  class RoomList {
    constructor() {
      this.rooms = {}
    }

    newRoom(info) {
      const room = new Room(info)
      this.rooms[room.id] = room
      return room
    }

    findById(id) {
      return this.rooms[id]
    }

    removeRoom(id) {
      delete this.rooms[id]
    }

    // utility to remove and delete room if needed
    removePlayer(socket, id) {
      const room = this.findById(id)
      if (!room) {
        return socket.emit(
          'err',
          'Could not leave requested room because it doesn not exist'
        )
      }
      const isEmpty = room.removePlayer(socket)

      if (isEmpty) {
        this.removeRoom(room.id)
      }
    }
  }
  return {
    Room,
    RoomList
  }
}
