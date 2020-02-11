import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import game from './game'
import isHost from './is_host'
import questionModal from './question_modal'
import question from './question'
import isBuzzerDisabled from './is_buzzer_disabled'

const reducer = combineReducers({
  user,
  isHost,
  game,
  questionModal,
  question,
  isBuzzerDisabled
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './game'
export * from './is_host'
export * from './question_modal'
export * from './question'
export * from './is_buzzer_disabled'
