import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import client from '../../utils/client'
import { handleError } from '../../utils/error_handler'
import SigninForm from '../../components/signin_form'
import './index.scss'

class SigninContainer extends Component {
  signin = event => {
    event.preventDefault()
    const [email, password] = Array.from(event.nativeEvent.target)
    const data = this.formatData(email, password)
    client.post('/auth/login', data)
              .then(res => {
                this.props.setToken(res.data.auth_token)
                this.props.history.push(`/`)
              })
              .catch(err => handleError(err))
  }

  formatData = (email, password) => {
    return {
      email: email.value,
      password: password.value
    }
  }

  render() {
    return (
      <div>
        { this.props.user
        ? <Redirect to={'/'} />
        : <div>
          <h2>Sign in to save your own "til" notes...</h2>
          <SigninForm onSignin={this.signin}/>
        </div> }
      </div>
    )
  }
}

export default withRouter(SigninContainer)
