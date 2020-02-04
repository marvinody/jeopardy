import {SHOW_QUESTION} from './game'

const initialState = {
  categoryIdx: 0,
  questionIdx: 0,
  question: '',
  answer: '',
  price: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUESTION:
      return {
        ...state,
        categoryIdx: action.categoryIdx,
        questionIdx: action.questionIdx,
        question: action.question,
        answer: action.answer,
        price: action.price
      }
    default:
      return state
  }
}
