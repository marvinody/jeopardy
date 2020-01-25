import React from 'react'
import {startGame} from './features'

const Pregame = ({game}) => {
  const emptyCount = game.teamCount - game.teams.length
  const teamNames = game.teams.map(team => (
    <li key={team.teamName}>{team.teamName}</li>
  ))
  const blanks = Array(emptyCount)
    .fill(0)
    .map((_, idx) => <li key={idx}>-</li>)
  return (
    <div>
      <h1>{game.name}</h1>
      <button type="button" disabled={emptyCount !== 0} onClick={startGame}>
        Start
      </button>
      <ul>
        {teamNames}
        {blanks}
      </ul>
    </div>
  )
}

export default Pregame
