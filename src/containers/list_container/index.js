import React, { Component } from 'react'
import jwtDecoder from '../../utils/jwtDecoder'
import client from '../../utils/client'
import TilForm from '../../components/til_form'
import TilCard from '../../components/til_card'
import './index.scss'

class ListContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userPageId: props.match.params.id,
      token: localStorage.getItem('token'),
      items: []
    }

    this.getItems()
  }

  currentUserId = () => jwtDecoder(this.state.token).user_id

  getItems = () => {
    client.get(`/users/${this.state.userPageId}/items`)
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err))
  }

  createItem = event => {
    event.preventDefault()
    const data = { content: event.nativeEvent.target[0].value, date: Date.now() }
    client.post(`users/${this.currentUserId()}/items`, data)
          .then(() => {
            document.getElementById('til-form').reset()
            this.getItems()
          })
          .catch(err => console.log(err))
  }

  isAuthorized = () => +this.state.userPageId === this.currentUserId()

  render() {
    return (
      <div>
        {this.isAuthorized() && <TilForm createItem={this.createItem} />}
        {this.state.items.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
