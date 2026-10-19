import React, { Component } from 'react'

export default class Bob extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Hello this is bob Component</h2>
        <h3>{this.props.text}</h3>
      </div>
    )
  }
}
