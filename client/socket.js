import io from 'socket.io-client'
import {ACTIONS, EVENT} from '../constants/socket'
import history from './history'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on(EVENT.ERROR, ({redirect, message}) => {
  console.error(message)
  alert(message)
  history.push(redirect)
})

export default socket
