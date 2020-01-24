import socket from '../../socket'
import {CREATE_ROOM} from '../../../constants/socket'

export const createRoom = ({gameName, teamCount, questionSet}) => {
  socket.emit(CREATE_ROOM, {
    gameName,
    teamCount,
    questionSet
  })
}
