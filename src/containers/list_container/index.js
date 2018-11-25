import React, { Component } from 'react'
import client from '../../client'
import TilForm from '../../components/til_form'
import TilCard from '../../components/til_card'
import './index.scss'

class ListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.getItems()
  }

  getItems = () => {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    client.get(`users/${id}/items`, { headers: { Authorization: token } })
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.props.user.id && <TilForm />}
        {this.state.items.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
