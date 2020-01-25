import React from 'react'
import {connect} from 'react-redux'
import './features' // for any side effects on hooks needed
import {GAME_STATE} from '../../../../constants/socket'
import Pregame from './Pregame'

const Host = ({game}) => {
  const showPregame =
    game.state === GAME_STATE.PREGAME || game.state === GAME_STATE.PAUSED
  return <>{showPregame && <Pregame game={game} />}</>
}

export default connect(state => ({
  game: state.game
}))(Host)
