import React, { Component } from 'react'

export default class UpdatingState extends Component {
    constructor() {
        super();
        this.state = {
            value: 5,
        }
    }
    increment = () => {
        // For the purpose of our example, lets just make the increment function arr the rating by one
        // this.setState((state) => {
        //     return {
        //         value: this.state.value + 1,
        //     };
        // });

        this.setState((state) => {
            return {value: state.value + 1};
        });
    
    }

    decrement() {
        
    }

  render() {

    // Conditional rendering in React
    let initialText = "Average rating:";
    let changedText = "You rated this product:";
    let displayText = "";

    let counter = 1;

    if (this.state.value != 5) {
        counter = counter + 1;
    }
    if (counter >= 2) {
        displayText = changedText;
    } else {
        displayText = initialText;
    }
    return (
      <div className="rating-wrapper">
        <h3>Please rate this max out of 10</h3>
        <div>
            <button className="positive" onClick={this.increment}>
                {" "}
                Rate up{" "}
            </button>
            <button className="negative" onClick={this.decrement}>
                {" "}
                Rate down{" "}
            </button>
            <div className="rating-result">
                {" "}
                {displayText} {this.state.value}
            </div>

           
        </div>
      </div>
    );
  }
}
