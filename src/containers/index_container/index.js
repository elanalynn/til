import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Cat } from 'react-kawaii'
import './index.scss'

class IndexContainer extends Component {
  render() {
    return (
      <div>
        { this.props.user
          ? <Redirect to={`/${this.props.user.id}/items`} />
        : <div className="wrapper index-container">
          <section>
            <h1>Today I Learned...</h1>
            <h4>Take note of things you learn.</h4>
          </section>
          <Cat size={360} mood="excited" color="#4682B3" />
        </div> }
      </div>
    )
  }
}

export default IndexContainer
