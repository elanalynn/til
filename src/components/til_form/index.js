import React from 'react'
import './index.scss'

const TilForm = props => {
  return (
    <div className="til-form-wrapper">
      <form id="til-form" className="wrapper" onSubmit={props.handleSubmit}>
        <label htmlFor="content">Today I Learned...</label>
        <textarea name="content"/>
        <label htmlFor="tags">Tags (comma separated values)</label>
        <input name="tags"/>
        <input type="submit" className="button primary" value="Save" />
      </form>
    </div>
  )
}

export default TilForm
