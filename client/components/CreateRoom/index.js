import React, {useState} from 'react'
import {createRoom} from './features'

const CreateRoom = () => {
  const [gameName, setGameName] = useState('')
  const [teamCount, setTeamCount] = useState(2)

  const setterMaker = setter => event => setter(event.target.value)

  const createRoomClick = event => {
    event.preventDefault()
    createRoom({gameName, teamCount, questionSet: 'flex-week-1'})
  }
  return (
    <div className="create-room">
      <h1>Creating Room</h1>
      <form>
        <div className="form-group">
          <label>Game Name:</label>
          <input
            type="text"
            name="name"
            required
            value={gameName}
            onChange={setterMaker(setGameName)}
          />
        </div>

        <div className="form-group">
          <label>Question Set:</label>
          <select>
            <option value="flex-week-1">Flex Week 1</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Teams:</label>
          <input
            type="number"
            min="2"
            max="6"
            name="teams"
            required
            value={teamCount}
            onChange={setterMaker(setTeamCount)}
          />
        </div>
        <button type="submit" onClick={createRoomClick}>
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateRoom
