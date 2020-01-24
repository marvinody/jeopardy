import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Landing, CreateRoom, Game, JoinRoom} from './components'
/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Landing} path="/" exact={true} />
        <Route component={CreateRoom} path="/create" exact={true} />
        <Route component={JoinRoom} path="/join/:roomId" />
        <Route component={Game} path="/game/:roomId" />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
