import React from 'react'
import {connect} from 'react-redux'

const Host = ({game}) => {
  return (
    <div>
      <ul>{game.teams.map(team => <li>{team.teamName}</li>)}</ul>}
    </div>
  )
}

export default connect(state => ({
  game: state.game
}))(Host)
