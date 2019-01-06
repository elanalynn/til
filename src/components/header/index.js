import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './index.scss'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      userMenu: false
    }
  }
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Link to="/"><h1>til</h1></Link>
          { this.props.user 
          ? <div className="items-right" 
                 onMouseEnter={() => this.setState({userMenu: true})}
                 onMouseLeave={() => this.setState({userMenu: false})}>
            <p>Hi {this.props.user.first_name}!</p>
            { this.state.userMenu && <a href="/" onClick={this.props.logout}>Logout</a> }
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
}

export default Header
