import React, { Component } from 'react'
import api_client from '../../api_client'
import TilForm from '../../components/til_form'
import TilCard from '../../components/til_card'
import dummyData from './dummyData.js'
import './index.scss'

class ListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { items: this.getItems() }
  }

  getItems = () => {
    const token = localStorage.getItem('token')
    api_client.get(`/items`, { headers: { Authorization: token } })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        { this.props.user.id && <TilForm /> }
        {dummyData.data.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
