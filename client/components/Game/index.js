import React from 'react'
import {connect} from 'react-redux'
import {} from './features'
import history from '../../history'
import Host from './Host'
import Team from './Team'
const Game = ({game, match, isHost}) => {
  if (!game.id) {
    const {roomId} = match.params
    history.push(`/join/${roomId}`)
    return null
  }
  return (
    <div className="game">
      {isHost && <Host />}
      {!isHost && <Team />}
    </div>
  )
}

export default connect(state => ({
  game: state.game,
  isHost: state.isHost
}))(Game)
