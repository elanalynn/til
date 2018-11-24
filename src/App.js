import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListContainer from './containers/list_container'
import SignupContainer from './containers/signup_container'
import SigninContainer from './containers/signin_container'
import NoMatchContainer from './containers/no_match_container'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: {} }
  }

  setUser = user => this.setState({user: user})

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <div className="wrapper">
              <h1>til</h1>
              <p>Hello {this.state.user.first_name}</p>
            </div>
          </header>
          <main className="wrapper">
            <Switch>
              <Route exact path="/signup"
                     render={ () => <SignupContainer user={this.state.user} setUser={this.setUser} /> } />
              <Route exact path="/signin" render={ () => <SigninContainer user={this.state.user}/> } />
              <Route path="/" render={ () => <ListContainer user={this.state.user} /> } />
              <Route component={ NoMatchContainer } />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
