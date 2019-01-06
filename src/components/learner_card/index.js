import React from 'react'
import './index.scss'

const LearnerCard = props => {
  return (
    <div className="learner-card">
      <div className="card-body">
        <p>{props.learner.first_name}</p>
        {props.learner.tags.map(tag => <span className="tag" key={`tag-${tag}`}>#{tag}</span>)}
      </div>
    </div>
  )
}

export default LearnerCard
