import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'

export default class Routers extends Component{
  render() {
    return (
      <div style={{position: 'relative'}}>
        <div className="mainContent">
          <Switch>
            <Route path="/twitch-alertbox-tmi-ghostermoma" component={App}/>         
          </Switch>
          {/*<Route path="/login" component={LoginRegister} />*/}
        </div>
      </div>
    )
  }
}
