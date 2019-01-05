import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import client from './utils/client'
import jwtDecoder from './utils/jwtDecoder'
import Header from './components/header'
import ListContainer from './containers/list_container'
import SignupContainer from './containers/signup_container'
import SigninContainer from './containers/signin_container'
import IndexContainer from './containers/index_container'
import NoMatchContainer from './containers/no_match_container'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: localStorage.getItem('token'),
      user: {}
    }

    this.setUser()
  }

  setUser = () => this.state.token
                  ? client.get(`/users/${jwtDecoder(this.state.token).user_id}`)
                          .then(res => this.setState({user: res.data}))
                          .catch(err => console.log(err))
                  : {}

  logout = () => localStorage.clear()

  render() {
    const user = this.state.user
    return (
      <Router>
        <div>
          <Header user={user} logout={this.logout}/>
          <Switch>
            <Route exact path="/signup" render={ () => <SignupContainer user={user} setUser={this.setUser} /> } />
            <Route exact path="/signin" render={ () => <SigninContainer user={user}/> } />
            <Route path="/:id" component={ListContainer} />
            <Route path="/" component={IndexContainer} />
            <Route component={ NoMatchContainer } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
