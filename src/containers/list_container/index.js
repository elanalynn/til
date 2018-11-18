import React, { Component } from 'react'
import TilItem from '../../components/til_item'
import dummyData from './dummyData.js'
import './index.scss'

class ListContainer extends Component {
  render() {
    return (
      <div>
        {dummyData.data.map(itemProps => <TilItem {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
