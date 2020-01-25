import socket from '../../socket'
import {EVENT, ACTIONS} from '../../../constants/socket'
import store, {updateGame} from '../../store'

socket.on(EVENT.ROOM_PLAYER_JOIN, game => {
  store.dispatch(updateGame(game))
})

socket.on(ACTIONS.GAME_START.RES, game => {
  store.dispatch(updateGame(game))
})
