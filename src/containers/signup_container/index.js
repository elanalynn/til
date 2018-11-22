import React, { Component } from 'react'
import api_client from '../../api_client'
import SignupForm from '../../components/signup_form'
import './index.scss'

class SignupContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.getUser(1)
    }
  }

  getUser = id => id ? api_client.get(`/users/${id}`, { withCredentials: true }).data: null

  render() {
    return (
      <div>
        <h2>Sign up to save your own "til" notes...</h2>
        <SignupForm />
      </div>
    )
  }
}

export default SignupContainer
