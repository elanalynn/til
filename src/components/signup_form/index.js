import React from 'react'
import './index.scss'

const SignupForm = props => {
  return (
    <form className="signup-form" onSubmit={ props.signup } >
      <label htmlFor="first_name">First Name</label>
      <input name="first_name" type="text" />
      <label htmlFor="last_name">Last Name</label>
      <input name="last_name" type="text" />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" />
      <label htmlFor="password_confirmation">Confirm Password</label>
      <input name="password_confirmation" type="password" />
      <input type="submit" className="button primary" value="Save" />
    </form>
  )
}

export default SignupForm
