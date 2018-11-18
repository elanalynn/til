import React, { Component } from 'react'
import TilForm from './components/til_form'
import ListContainer from './containers/list_container'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>TIL</h1>
        </header>
        <main className="wrapper">
          <TilForm />
          <ListContainer />
        </main>
      </div>
    )
  }
}

export default App
