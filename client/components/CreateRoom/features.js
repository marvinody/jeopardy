import socket from '../../socket'
import {ACTIONS} from '../../../constants/socket'
import history from '../../history'

export const createRoom = ({gameName, teamCount, questionSet}) => {
  socket.emit(ACTIONS.ROOM_CREATE.REQ, {
    gameName,
    teamCount,
    questionSet
  })
}

socket.on(ACTIONS.ROOM_CREATE.RES, room => {
  history.push(`/join/${room.id}#${room.name}`)
})
