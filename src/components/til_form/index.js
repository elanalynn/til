import React from 'react'
import './index.scss'

const TilForm = props => {
  return (
    <form id="til-form" onSubmit={props.createItem}>
      <label htmlFor="content">Today I Learned...</label>
      <textarea name="content"/>
      <input type="submit" className="button primary" value="Save" />
    </form>
  )
}

export default TilForm
