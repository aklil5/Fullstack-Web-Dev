import React, { Component } from 'react'

export default class UUpdateStates extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            status: "Even",
        }
    };

    // incrementCounter = () => {
    //     // Incorrect way (could lead to stale state) **USING OBJECT
    //     this.setState({ counter: this.state.counter + 1 })

    //     // This may not reflect the correct status
        //  it wont wait until the number is change to state the status to Even or Odd usually showing incorrect status 
    //     if (this.state.counter % 2 == 0) {
    //         this.setState({ status: "Even" })
    //     } else {
    //         this.setState({ status: "Odd" });
    //     }
    // }

    incrementCounterWithCallback = () => {
        // Correct way **USING CALLBACK
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
            status: prevState.counter % 2 == 0 ? "Odd" : "Even",
        }))
    }
    // changing to even or odd based on the PREVIOUS NUMBER 
    // ORRR

    incrementCounterWithCallback2 = () => {
        this.setState((prevState) => ({counter: prevState.counter + 1}))

        this.setState((prevState) => ({
            status: prevState.counter % 2 == 0 ? "Even" : "Odd",
        }))
    }

    decrement = () => {
        this.setState((prevState) => ({ counter: prevState.counter - 1}));
    };

    reset = () => {
        this.setState(() => ({counter: 0 }))
    };

  render() { 
    return (
      <div>
        <h1>Updating State</h1>

        <h2>{this.state.counter}</h2>
        <h3>{this.state.status}</h3>

        <button onClick={this.incrementCounterWithCallback}>Add 1</button>

        <button onClick={this.decrement}>Minus 1</button>

        <button onClick={this.reset}>reset</button>

        {/* <Reset resetBtn={this.reset}/> */}

        <hr />



      </div>

      
    )
  }
}
