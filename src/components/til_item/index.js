import React from 'react'
import './index.scss'

const TilItem = props => {
  console.log(props)
  return (
    <div className="card">
      <p>{props.content}</p>
      <div>{props.tags.map(tag => <span className="tag" key={tag}>#{tag}</span>)}</div>
    </div>
  )
}

export default TilItem
