import React from 'react'
import {connect} from 'react-redux'
import {buzzIn} from './features' // for any side effects on hooks needed also

import {GAME_STATE} from '../../../../constants/socket'

const stateToString = {
  [GAME_STATE.PREGAME]: 'Waiting to start...',
  [GAME_STATE.PAUSED]: 'PAUSED!'
}

const Team = ({game, buzzerState}) => {
  const showState =
    game.state === GAME_STATE.PREGAME || game.state === GAME_STATE.PAUSED
  return (
    <div>
      {showState && <h3>{stateToString[game.state]}</h3>}
      <button type="button" disabled={buzzerState} onClick={buzzIn}>
        Buzz In
      </button>
    </div>
  )
}

export default connect(state => ({
  game: state.game,
  buzzerState: state.isBuzzerDisabled
}))(Team)
