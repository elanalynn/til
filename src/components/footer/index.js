import React, { Component } from 'react'
import './index.scss'

class Footer extends Component {
  constructor() {
    super()

    this.state = {
      userMenu: false
    }
  }
  render() {
    return (
      <header className="footer">
        <div className="wrapper">
          &copy; Elana Kopelevich 2018
          <div className="items-right">Images via <a href="https://react-kawaii.now.sh/">React Kawaii</a></div>
        </div>
      </header>
    )
  }
}

export default Footer
