import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import api_client from '../../api_client'
import TilForm from '../../components/til_form'
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
      <Route render={ props => props.isAuthenticated
        ? <div>
          <TilForm />
          {dummyData.data.map(itemProps => <TilCard {...itemProps} key={`item-${itemProps.id}`}/>)}
        </div>
        : <Redirect to={{ pathname: "/signin", state: { from: '' } } } />
      } />
    )
  }
}

export default ListContainer
