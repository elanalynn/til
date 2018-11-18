import React from 'react'
import './index.scss'

const TilCard = props => {
  return (
    <div className="card">
      <p>{props.content}</p>
      <div className="tags">{props.tags.map(tag => <span className="tag" key={tag}>#{tag}</span>)}</div>
    </div>
  )
}

export default TilCard
