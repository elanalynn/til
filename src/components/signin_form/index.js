import React, { Component } from 'react'
import './index.scss'

class SigninForm extends Component {
  render() {
    return (
      <form className="signin-form">
        <label htmlFor="email">Email</label>
        <input name="email"/>
        <label htmlFor="password">Password</label>
        <input name="password"/>
        <button className="button primary">Save</button>
      </form>
    )
  }
}

export default SigninForm
