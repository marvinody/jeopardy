import React from 'react'
import {connect} from 'react-redux'

import {GAME_STATE} from '../../../../constants/socket'

const stateToString = {
  [GAME_STATE.PREGAME]: 'Waiting to start...',
  [GAME_STATE.PAUSED]: 'PAUSED!'
}

const Team = ({game}) => {
  const showState =
    game.state === GAME_STATE.PREGAME || game.state === GAME_STATE.PAUSED
  return (
    <div>
      {showState && <h3>{stateToString[game.state]}</h3>}
      <button type="button" disabled>
        Buzz In
      </button>
    </div>
  )
}

export default connect(state => ({
  game: state.game
}))(Team)
