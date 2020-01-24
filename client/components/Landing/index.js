import React from 'react'
import {gotoNewRoom, gotoJoinRoom} from './features'

const Landing = () => {
  return (
    <div className="landing">
      <div onClick={gotoJoinRoom}>Join existing room</div>
      <div onClick={gotoNewRoom}>Create a new room</div>
    </div>
  )
}

export default Landing
