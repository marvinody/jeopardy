export const UPDATE_GAME = 'UPDATE_GAME'

const initialState = {}

export const updateGame = game => ({
  type: UPDATE_GAME,
  game
})

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAME:
      return action.game
    default:
      return state
  }
}
