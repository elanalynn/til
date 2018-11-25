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
    client.get(`/items`)
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err))
  }

  createItem = event => {
    event.preventDefault()
    const data = { content: event.nativeEvent.target[0].value, date: Date.now() }
    client.post(`/items`, data)
          .then(() => {
            document.getElementById('til-form').reset()
            this.getItems()
          })
          .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.props.user.id && <TilForm createItem={this.createItem} />}
        {this.state.items.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
      </div>
    )
  }
}

export default ListContainer
