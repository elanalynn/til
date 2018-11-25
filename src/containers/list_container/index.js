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

  handleSubmit = event => {
    event.preventDefault()
    const content = event.nativeEvent.target[0].value
    const tags = event.nativeEvent.target[1].value 
    this.createItem({ content, date: Date.now() }, tags)
  }

  createItem = (data, tags) => {
    client.post(`users/${this.currentUserId()}/items`, data)
          .then(res => {
            document.getElementById('til-form').reset()
            this.createTags(tags, res.data.id)
          })
          .catch(err => console.log(err))
  }

  createTags = (tags, itemId) => {
    tags.split(',').forEach(label => {
      client.post(`users/${this.currentUserId()}/items/${itemId}/tags`, {label: label.replace(/\s/g, '')})
            .then(() => this.getItems())
            .catch(err => console.log(err))
    })
  }

  isAuthorized = () => +this.state.userPageId === this.currentUserId()

  render() {
    return (
      <div>
        {this.isAuthorized() && <TilForm handleSubmit={this.handleSubmit} />}
        <div className="wrapper">
          {this.state.items.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
        </div>
      </div>
    )
  }
}

export default ListContainer
