import {SHOW_QUESTION} from './game'
const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUESTION:
      return true
    default:
      return state
  }
}
