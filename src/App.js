import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import client from './utils/client'
import jwtDecoder from './utils/jwtDecoder'
import { handleError } from './utils/error_handler'
import Header from './components/header'
import Footer from './components/footer'
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
      user: null
    }
  }

  componentDidMount() {
    const token = this.state.token || localStorage.getItem('token')
    token ? this.fetchUser(this.state.token) : this.setState({user: null})
  }

  fetchUser = token => {
    client.get(`/users/${jwtDecoder(token).user_id}`)
          .then(res => this.setUser(res.data))
          .catch(err => handleError(err))
  }

  setUser = user => this.setState({user: user})

  setToken = token => localStorage.setItem('token', token)

  logout = () => {
    this.setState({user: null})
    localStorage.clear()
  }

  render() {
    const user = this.state.user
    return (
      <Router>
        <div>
          <div className="wrapper-for-sticky-footer">
            <Header user={user} logout={this.logout}/>
            <Switch>
              <Route exact path="/signup" render={ () => <SignupContainer user={user} setToken={this.setToken} /> } />
              <Route exact path="/signin" render={ () => <SigninContainer user={user} setToken={this.setToken}/> } />
              <Route path="/:id" component={ListContainer} user={user} />
              <Route exact path="/" render={ () => <IndexContainer user={user} /> } />
              <Route component={ NoMatchContainer } />
            </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
