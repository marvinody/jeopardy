import React from 'react'
import {connect} from 'react-redux'
import {hideQuestion} from '../../store'

const QuestionModal = ({
  showModal,
  question,
  board,
  categoryIdx,
  hideModal
}) => {
  if (!showModal) {
    return null
  }
  const category = board.categories[categoryIdx].title
  return (
    <div id="openModal" className="modalDialog">
      <div>
        <div className="close" onClick={hideModal}>
          x
        </div>
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

const mapDispatch = dispatch => ({
  hideModal: () => dispatch(hideQuestion())
})

export default connect(mapState, mapDispatch)(QuestionModal)
