import React from 'react'
import dayjs from 'dayjs'
import './index.scss'

const TilCard = props => {
  return (
    <div className="card">
      <div className="card-header">{dayjs(props.date).format('dddd, MMMM DD, YYYY')}</div>
      <div className="card-body">
        <p>{props.content}</p>
        <div className="tags">
          {props.tags.map(tag => <span className="tag" key={`tag-${tag.id}`}>#{tag.label}</span>)}
        </div>
      </div>
      <div className="card-footer">
        <i className="fas fa-pencil-alt"></i>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  )
}

export default TilCard