import socket from '../../../socket'
import {EVENT, ACTIONS} from '../../../../constants/socket'
import store, {updateGame, setBuzzer} from '../../../store'

socket.on(EVENT.ROOM_PLAYER_JOIN, game => {
  store.dispatch(updateGame(game))
})

socket.on(ACTIONS.GAME_START.RES, game => {
  store.dispatch(updateGame(game))
})

socket.on(ACTIONS.GAME_BUZZER.DISABLE, () => {
  console.debug('DISABLING BUZZER')
  store.dispatch(setBuzzer(true))
})

socket.on(ACTIONS.GAME_BUZZER.ENABLE, () => {
  console.debug('ENABLING BUZZER')
  store.dispatch(setBuzzer(false))
})

export const buzzIn = () => {
  socket.emit(ACTIONS.GAME_BUZZER.BUZZ_IN)
}
