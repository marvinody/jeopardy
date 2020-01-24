const RoomMaker = require('./Room')
const {ACTIONS, EVENT} = require('../../constants/socket')

module.exports = io => {
  const {RoomList} = RoomMaker(io)
  // and now let's make a new room list to use for all our rooms
  const rooms = new RoomList()
  io.on('connection', socket => {
    socket.data = {}
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on(ACTIONS.ROOM_CREATE.REQ, info => {
      const createdRoom = rooms.newRoom(info)
      socket.emit(ACTIONS.ROOM_CREATE.RES, createdRoom.basicInfo())
    })

    socket.on(ACTIONS.ROOM_JOIN.REQ, id => {
      rooms.addPlayer(id, socket)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
