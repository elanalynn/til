import React, { Component } from 'react'
import api_client from '../../api_client'
import TilCard from '../../components/til_card'
import dummyData from './dummyData.js'
import './index.scss'

class ListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: this.getItems()
    }
  }

  getUser(id) {
    return api_client.get(`/users/${id}`, { withCredentials: true }).data
  }

  getItems = () => {
    api_client.get('')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {dummyData.data.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
