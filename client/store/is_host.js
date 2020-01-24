import {UPDATE_GAME} from './game'
import socket from '../socket'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAME:
      return action.game.host.id === socket.id
    default:
      return state
  }
}
