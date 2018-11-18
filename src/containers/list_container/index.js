import React, { Component } from 'react'
import TilCard from '../../components/til_card'
import dummyData from './dummyData.js'
import './index.scss'

class ListContainer extends Component {
  render() {
    return (
      <div>
        {dummyData.data.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
