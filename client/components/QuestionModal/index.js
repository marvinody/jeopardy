import React from 'react'
import {connect} from 'react-redux'

const QuestionModal = ({showModal, question, board, categoryIdx}) => {
  if (!showModal) {
    return null
  }
  const category = board.categories[categoryIdx].title
  return (
    <div id="openModal" className="modalDialog">
      <div>
        <h2>
          {category} - ${question.price}
        </h2>
        <p>{question.question}</p>
      </div>
    </div>
  )
}

const mapState = state => ({
  showModal: state.questionModal,
  question: state.question,
  board: state.game.board,
  categoryIdx: state.question.categoryIdx
})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(QuestionModal)
