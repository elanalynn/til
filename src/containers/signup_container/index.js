import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import client from '../../utils/client'
import { handleError } from '../../utils/error_handler'
import SignupForm from '../../components/signup_form'
import './index.scss'

class SignupContainer extends Component {
  signup = event => {
    event.preventDefault()
    const [first, last, email, password, password_conf] = Array.from(event.nativeEvent.target)
    const data = this.formatData(first, last, email, password, password_conf)
    client.post('signup', data)
              .then(res => this.props.setToken(res.data.auth_token))
              .catch(err => handleError(err))
  }

  formatData = (first, last, email, password, password_conf) => {
    return {
      first_name: first.value,
      last_name: last.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_conf.value
    }
  }

  render() {
    return (
      <div>
      { this.props.user
      ? <Redirect to={'/'} />
      : <div>
        <h2>Sign up to save your own "til" notes...</h2>
        <SignupForm onSignup={this.signup} />
      </div> }
      </div>
    )
  }
}

export default SignupContainer
