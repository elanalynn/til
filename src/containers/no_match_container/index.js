import React, { Component } from 'react'
import { Ghost } from 'react-kawaii'
import './index.scss'

class NoMatchContainer extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>404</h1>
        <h4>It looks like the page you are looking for doesn't exist.</h4>
        <Ghost size={240} mood="sad" color="#4682B3" />
      </div>
    )
  }
}

export default NoMatchContainer
