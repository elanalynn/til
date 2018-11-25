import React from 'react'
import './index.scss'

const Header = props => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1>til</h1>
        {props.user.id && <div className="items-right">
          <p>Hi {props.user.first_name}!</p>
          <a href="/" onClick={props.logout}>Logout</a>
        </div>}
      </div>
    </header>
  )
}

export default Header
