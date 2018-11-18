import React, { Component } from 'react'
import TilForm from './components/til_form'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Today I Learned...</h1>
        </header>
        <TilForm /> 
      </div>
    );
  }
}

export default App
