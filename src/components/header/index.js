import React from 'react'
import './index.scss'

const Header = props => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1>til</h1>
        <p>Hello {props.user.first_name}</p>
      </div>
    </header>
  )
}

export default Header
