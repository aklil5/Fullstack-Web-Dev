import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Total Clicks: {this.props.count}</p>
      </div>
    )
  }
}
