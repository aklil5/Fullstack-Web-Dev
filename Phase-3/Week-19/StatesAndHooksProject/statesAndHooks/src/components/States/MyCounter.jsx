import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

export default class MyCounter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    
    // this.allClicksCounter = this.allClicksCounter.bind(this)
    }
    
    allClicksCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }
  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click here</button>
        <CounterDisplayer count={this.state.count} />

        <EvenCounterDisplayer count={this.state.count}/>
      </div>
    )
  }
}
