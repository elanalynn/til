import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Cat } from 'react-kawaii'
import LearnerCard from './learner_card'
import './index.scss'

class IndexContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      learners: [
        { first_name: 'Abby', tags: ['kubernetes', 'docker'] },
        { first_name: 'John', tags: ['css', 'design systems'] },
        { first_name: 'Igor', tags: ['racecar driving', 'history'] }]
    }
  }

  render() {
    return (
      <div className="wrapper index-container">
        <section>
          <h1>Today I Lerned...</h1>
          <h4>Take note of things you learn.</h4>
          { this.props.user && <div>
            <hr />
            <Link to={`/${this.props.user.id}/items`} className="button primary">
              <h2>Go to your Dashboard...</h2>
            </Link>
          </div> }
          <hr />
          <h2>See what others are learning!</h2>
          <div className="other-learners">
            {this.state.learners.map(l => <LearnerCard learner={l} key={`l-${l.first_name}`}/>)}
          </div>
        </section>
        <Cat size={360} mood="excited" color="#4682B3" />
      </div>
    )
  }
}

export default IndexContainer
