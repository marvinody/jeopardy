import React from 'react'

const Ingame = ({game}) => {
  return (
    <div className="in-game">
      <div className="title">
        <h2>{game.name}</h2>
      </div>
      <div className="game-info">
        <TeamScores teamData={game.teamData} />
        <Board board={game.board} />
      </div>
    </div>
  )
}

const Board = ({board}) => {
  return (
    <div className="board">
      {board.categories.map(category => (
        <div className="category" key={category.title}>
          <h4>{category.title}</h4>
          <div className="questions">
            {category.questions.map((question, idx) => (
              <div className="question price" key="question">
                <span>{(idx + 1) * 200}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const TeamScores = ({teamData}) => {
  return (
    <div className="team-scores">
      {teamData.map(team => (
        <div className="team-score-group" key={team.id}>
          <h5>{team.teamName}</h5>
          <span className="team-score">{team.score}</span>
        </div>
      ))}
    </div>
  )
}

export default Ingame
