import React from 'react'
import {connect} from 'react-redux'
import './features' // for any side effects on hooks needed
import {GAME_STATE} from '../../../../constants/socket'
import Pregame from './Pregame'
import Ingame from './Ingame'

const Host = ({game}) => {
  const showPregame =
    game.state === GAME_STATE.PREGAME || game.state === GAME_STATE.PAUSED
  const showIngame = game.state === GAME_STATE.INGAME
  return (
    <>
      {showPregame && <Pregame game={game} />}
      {showIngame && <Ingame game={game} />}
    </>
  )
}

export default connect(state => ({
  game: state.game
}))(Host)
