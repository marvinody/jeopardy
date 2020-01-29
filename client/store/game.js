export const UPDATE_GAME = 'UPDATE_GAME'
const SHOW_QUESTION = 'SHOW_QUESTION'
const initialState = {}

export const updateGame = game => ({
  type: UPDATE_GAME,
  game
})

export const showQuestion = ({categoryIdx, questionIdx}) => ({
  type: SHOW_QUESTION,
  categoryIdx,
  questionIdx
})

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
