module.exports = {
  // events can happen without any user interaction
  // generally from actions of another person but don't need to
  // Error is the exception which can be from any request below
  EVENT: {
    ROOM_PLAYER_JOIN: 'ROOM_PLAYER_JOIN',
    ROOM_PLAYER_LEAVE: 'ROOM_PLAYER_LEAVE',
    ROOM_STATE_CHANGE: 'ROOM_STATE_CHANGE',
    ERROR: 'ERROR'
  },
  // actions are for a client to request a state update
  // and they all have corresponding response
  ACTIONS: {
    ROOM_CREATE: {
      REQ: 'REQ_ROOM_CREATE',
      RES: 'RES_ROOM_CREATE'
    },
    ROOM_JOIN: {
      REQ: 'REQ_ROOM_JOIN',
      RES: 'RES_ROOM_JOIN'
    },
    GAME_START: {
      REQ: 'REQ_GAME_START',
      RES: 'RES_GAME_START'
    }
  },
  GAME_STATE: {
    PREGAME: 'PREGAME',
    INGAME: 'INGAME',
    PAUSED: 'PAUSED',
    FINISHED: 'FINISHED'
  }
}
