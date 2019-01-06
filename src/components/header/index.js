import React from 'react'
import { Link } from "react-router-dom"
import './index.scss'

const Header = props => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1>til</h1>
        { props.user ? <div className="items-right">
          <p>Hi {props.user.first_name}!</p>
          <a href="/" onClick={props.logout}>Logout</a>
        </div>
        : <div className="items-right">
          <Link to="/signup">Sign Up</Link>
          <span> / </span>
          <Link to="/signin">Sign In</Link>
        </div> 
        }
      </div>
    </header>
  )
}

export default Header
