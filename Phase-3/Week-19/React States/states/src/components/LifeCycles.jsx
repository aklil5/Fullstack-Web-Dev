import React, { Component } from 'react'

export default class LifeCycles extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    changeStatus = () => {
        this.setState({ show: !this.state.show })
    }
  render() {
    return (
      <div>
        <h1>Component will Unmount Example</h1>
        <div>{this.state.show ? "Hey abe, you logged in" : "hey Abe, Logging out?"}</div>   

        <button onClick={this.changeStatus}>
            {this.state.show ? "Log Out" : "Log In"}
            {/* CONDITIONAL RENDERING */}

        </button>
      </div>
    )
  }
}
