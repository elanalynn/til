import React from 'react'
import './index.scss'

const SigninForm = ({onSignin}) => {
  return (
    <form className="signin-form" onSubmit={ onSignin }>
      <label htmlFor="email">Email</label>
      <input type="email" name="email"/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password"/>
      <button className="button primary">Save</button>
    </form>
  )
}

export default SigninForm
