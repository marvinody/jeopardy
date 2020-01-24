import React, {useEffect} from 'react'
import {joinRoom} from './features'

const JoinRoom = ({match: {params: {roomId}}}) => {
  joinRoom(roomId)

  return <div className="join-room" />
}

export default JoinRoom
