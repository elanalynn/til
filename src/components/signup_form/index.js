import React, { Component } from 'react'
import './index.scss'

class SignupForm extends Component {
  render() {
    return (
      <form className="signup-form">
        <label htmlFor="first_name">First Name</label>
        <input name="first_name"/>
        <label htmlFor="last_name">Last Name</label>
        <input name="last_name"/>
        <label htmlFor="email">Email</label>
        <input name="email"/>
        <label htmlFor="password">Password</label>
        <input name="password"/>
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input name="password_confirmation"/>
        <button className="button primary">Save</button>
      </form>
    )
  }
}

export default SignupForm
