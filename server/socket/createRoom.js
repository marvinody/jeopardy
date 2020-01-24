const {CREATE_ROOM} = require('../../constants/socket')

module.exports = io => {
  io.on('connection', socket => {
    socket.on(CREATE_ROOM, roomObj => {
      console.log({roomObj})
    })
  })
}
