import history from '../../history'

export const gotoNewRoom = () => {
  history.push('/create')
}

export const gotoJoinRoom = () => {
  const id = prompt('Room ID:')
  if (id) {
    history.push(`/join/${id}`)
  }
}
