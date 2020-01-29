import socket from '../../../socket'
import {EVENT, ACTIONS} from '../../../../constants/socket'
import store, {updateGame, showQuestion} from '../../../store'
const {dispatch} = store
socket.on(EVENT.ROOM_PLAYER_JOIN, game => {
  dispatch(updateGame(game))
})

export const startGame = () => {
  socket.emit(ACTIONS.GAME_START.REQ)
}

socket.on(ACTIONS.GAME_START.RES, game => {
  dispatch(updateGame(game))
})

export const showQuestionReq = ({categoryIdx, questionIdx}) => {
  socket.emit(ACTIONS.GAME_QUESTION_SELECT.REQ, {categoryIdx, questionIdx})
}

socket.on(ACTIONS.GAME_QUESTION_SELECT.RES, ({categoryIdx, questionIdx}) => {
  dispatch(showQuestion({categoryIdx, questionIdx}))
})
