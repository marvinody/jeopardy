import socket from '../../socket'
import {ACTIONS} from '../../../constants/socket'
import history from '../../history'
import store, {updateGame} from '../../store'

export const joinRoom = id => {
  console.log(`requesting to join: ${id}`)
  socket.emit(ACTIONS.ROOM_JOIN.REQ, id)
}

socket.on(ACTIONS.ROOM_JOIN.RES, game => {
  console.log({game})
  console.log(`MY ID: ${socket.id}`)
  store.dispatch(updateGame(game))
  history.push(`/game/${game.id}`)
})
