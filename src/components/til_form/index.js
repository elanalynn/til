import React, { Component } from 'react'
import './index.scss'
import DownArrow from './down_arrow'
import UpArrow from './up_arrow'

class TilForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: true
    }
  }

  render() {
    return (
      <div className="til-form-wrapper">
        { this.state.expanded ? <div>
            <form id="til-form" className="wrapper" onSubmit={this.props.handleSubmit}>
            <label htmlFor="content">Today I Learned...</label>
            <textarea name="content"/>
            <label htmlFor="tags">Tags (comma separated values)</label>
            <input name="tags"/>
            <input type="submit" className="button primary" value="Save" />
          </form>
          <div className="wrapper">
            <div className="arrow up-arrow pointer" onClick={ () => this.setState({expanded: false}) }>
              <UpArrow />
            </div>
          </div>
        </div>
        : <div className="wrapper" onClick={ () => this.setState({expanded: true}) }>
          <div className="text-center pointer">Click to add more Items...</div>
          <div className="arrow down-arrow pointer"><DownArrow /></div>
        </div> }
      </div>
    )
  }
}

export default TilForm
