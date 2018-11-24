import React, { Component } from 'react'
import SigninForm from '../../components/signin_form'
import './index.scss'

class SigninContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  signin = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Sign in to save your own "til" notes...</h2>
        <SigninForm />
      </div>
    )
  }
}

export default SigninContainer
