import React, { Component } from 'react'
import './index.scss'

class TilForm extends Component {
  render() {
    return (
      <form>
        <label>What have you learned today?</label>
        <textarea/>
        <button className="button primary">Save</button>
      </form>
    )
  }
}

export default TilForm
