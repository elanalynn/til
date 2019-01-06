import React, { Component } from 'react'
import jwtDecoder from '../../utils/jwtDecoder'
import client from '../../utils/client'
import { handleError } from '../../utils/error_handler'
import TilForm from '../../components/til_form'
import TilCard from '../../components/til_card'
import './index.scss'

class ListContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userPageId: props.match.params.id,
      token: localStorage.getItem('token'),
      learner: null,
      items: []
    }

    this.getLearner()
  }

  currentUserId = () => jwtDecoder(this.state.token).user_id

  getLearner() {
    const learnerId = this.props.match.params.id
    client.get(`/users/${learnerId}`)
      .then(res => {
        this.setState({learner: res.data})
        this.getItems()
      })
      .catch(err => handleError(err))
  }

  getItems = () => {
    client.get(`/users/${this.state.learner.id}/items`)
          .then(res => this.setState({ items: res.data }))
          .catch(err => handleError(err))
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
          .catch(err => handleError(err))
  }

  createTags = (tags, itemId) => {
    const tagArray = tags.includes(',') ? tags.split(',').map(tag => tag.trim()) : [tags]
    tagArray.forEach(tag => {
      client.post(`users/${this.currentUserId()}/items/${itemId}/tags`, {label: tag.replace(/\s/g, '_')})
            .then(() => this.getItems())
            .catch(err => handleError(err))
    })
  }

  isAuthorized = () => +this.state.userPageId === this.currentUserId()

  render() {
    return (
      <div className="list-wrapper">
        {this.isAuthorized() && <TilForm handleSubmit={this.handleSubmit} />}
        <h2>Stuff {this.state.learner && this.state.learner.first_name} has learned...</h2>
        <div className="wrapper">
          {this.state.items.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
        </div>
      </div>
    )
  }
}

export default ListContainer
