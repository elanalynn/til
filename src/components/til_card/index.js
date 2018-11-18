import React from 'react'
import './index.scss'

const TilCard = props => {
  console.log(props.date)
  return (
    <div className="card">
      <div className="card-header">{props.date.toString()}</div>
      <div className="card-body">
        <p>{props.content}</p>
        <div className="tags">{props.tags.map(tag => <span className="tag" key={tag}>#{tag}</span>)}</div>
      </div>
    </div>
  )
}

export default TilCard
