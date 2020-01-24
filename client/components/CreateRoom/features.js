import socket from '../../socket'
import {ACTIONS} from '../../../constants/socket'

export const createRoom = ({gameName, teamCount, questionSet}) => {
  socket.emit(ACTIONS.ROOM_CREATE.REQ, {
    gameName,
    teamCount,
    questionSet
  })
}
