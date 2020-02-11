const SET_BUZZER = 'SET_BUZZER'

export const setBuzzer = state => ({
  type: SET_BUZZER,
  state
})

const initialState = true

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BUZZER:
      return action.state
    default:
      return state
  }
}
