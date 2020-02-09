import {SHOW_QUESTION} from './game'

const HIDE_QUESTION = 'HIDE_QUESTION'

export const hideQuestion = () => ({
  type: HIDE_QUESTION
})

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUESTION:
      return true
    case HIDE_QUESTION:
      return false
    default:
      return state
  }
}
