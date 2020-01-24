import React from 'react'
import {connect} from 'react-redux'

const Team = ({game}) => {
  return (
    <div>
      <h3>{game.status}</h3>
      <button type="button" disabled>
        Buzz In
      </button>
    </div>
  )
}

export default connect(state => ({
  game: state.game
}))(Team)
