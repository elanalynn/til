import React, { Component } from 'react'
import TilForm from './components/til_form'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Today I Learned...</h1>
        </header>
        <TilForm /> 
      </div>
    )
  }
}

export default App
