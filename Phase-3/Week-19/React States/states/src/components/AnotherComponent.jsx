import React, { Component } from 'react'
import Bob from './Bob';

// PASSING PROPS TO STATE
export default class AnotherComponent extends Component {
    constructor(props) { // data from parent accepted through props  
        // here props is used as state and is mutable 
        super();
        this.state = {
            name: "Kebe",
            batch: props.batchNo,
            simpleText: "Hello World!!",
        }
    }
  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h2>Group: {this.state.batch}</h2>

        {/* just like we used props as state, we can also use STATES AS PROPS */}
        
        <Bob text={this.state.simpleText}
        />


        <h3>{this.props.someproperty}</h3>
      </div>
    )
  }
}
