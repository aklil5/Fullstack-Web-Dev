import React, { Component } from 'react'
import AnotherComponent from './AnotherComponent';

export default class InitializingState extends Component {
    constructor(){

        // super refers to the paarent class constructor. (React Component)
        super();
        this.state = {
            name: "Abe",
            bootCamp: "Evang",
            state1: 0,  // value can come from props 
            // state 3: this.props. if its a child component 
            state2: "Hello There"
        };

    }
    // alternative syntax
    // not recomended cause we may need to use (props)
    state = {
        name: "Abebe",
        age: "22",
    }


    ReactEvent() {
        alert("You clicked me??")
    }


    render() { 
        return (
                <div>
                     <h1>This is where you call the state</h1>   
                     <h1>To call the state: {this.state.state2}</h1>

                    <h1>Initializing State Example</h1>
                    <h2>{this.state.name}</h2>

                     {/* giving state to another component - child component if one value of the state is changes - reat re-render  */}
                    <AnotherComponent someproperty={`Another component: ${this.state.state2}`}/>


                    <button onClick={this.ReactEvent}> Click Me</button>
                </div>
        )

    }
  
}
