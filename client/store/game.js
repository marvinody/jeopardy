export const UPDATE_GAME = 'UPDATE_GAME'
export const SHOW_QUESTION = 'SHOW_QUESTION'
export const HIDE_QUESTION = 'HIDE_QUESTION'
const initialState = {}

export const updateGame = game => ({
  type: UPDATE_GAME,
  game
})

export const showQuestion = ({categoryIdx, questionIdx}) => (
  dispatch,
  getState
) => {
  const {game} = getState()
  const question = game.board.categories[categoryIdx].questions[questionIdx]
  if (question.answered) {
    console.warn('Question has already been answered, skipping')
    return
  }
  dispatch({
    type: SHOW_QUESTION,
    categoryIdx,
    questionIdx,
    question: question.question,
    answer: question.answer,
    price: (questionIdx + 1) * 200
  })
}

// ugly function that updates only 1 question and sets answered to true if match
const updateQuestion = (state, action) => {
  return {
    ...state,
    board: {
      ...state.board,
      categories: state.board.categories.map((category, cIdx) => {
        if (cIdx === action.categoryIdx) {
          return {
            ...category,
            questions: category.questions.map((question, qIdx) => ({
              ...question,
              answered: question.answered || qIdx === action.questionIdx
            }))
          }
        }
        return category
      })
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAME:
      return action.game
    case SHOW_QUESTION:
      return updateQuestion(state, action)
    default:
      return state
  }
}
