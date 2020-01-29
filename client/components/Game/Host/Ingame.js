import React from 'react'
import {showQuestionReq} from './features'
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
      {board.categories.map((category, categoryIdx) => (
        <div className="category" key={category.title}>
          <h4>{category.title}</h4>
          <div className="questions">
            {category.questions.map((question, questionIdx) => {
              const {answered} = question
              const className = [
                'question',
                'price',
                answered ? 'answered' : ''
              ].join(' ')
              return (
                <div
                  className={className}
                  key="question"
                  onClick={() => showQuestionReq({categoryIdx, questionIdx})}
                >
                  <span>{(questionIdx + 1) * 200}</span>
                </div>
              )
            })}
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
