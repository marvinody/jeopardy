import socket from '../../socket'
import {ACTIONS} from '../../../constants/socket'

export const joinRoom = id => {
  console.log(`requesting to join: ${id}`)
  socket.emit(ACTIONS.ROOM_JOIN.REQ, id)
}

socket.on(ACTIONS.ROOM_JOIN.RES, roomInfo => {
  console.log({roomInfo})
  console.log(`MY ID: ${socket.id}`)
})
