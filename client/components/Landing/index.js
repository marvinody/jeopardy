import React from 'react'
import {gotoNewRoom, gotoJoinRoom} from './features'

const Landing = () => {
  return (
    <div className="landing">
      <div onClick={gotoNewRoom}>Join existing room</div>
      <div onClick={gotoJoinRoom}>Create a new room</div>
    </div>
  )
}

export default Landing
