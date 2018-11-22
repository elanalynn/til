import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListContainer from './containers/list_container'
import SignupContainer from './containers/signup_container'
import SigninContainer from './containers/signin_container'
import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <div className="wrapper">
              <h1>til</h1>
            </div>
          </header>
          <main className="wrapper">
            <Route exact path="/" component={ListContainer} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/signin" component={SigninContainer} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
