import React, { Component } from 'react'

export default class ClassLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            age: 42,
            
        };
    }

    componentDidMount() {
        // alert("Hellu")
        console.log("componentDidMount");
        document.title = `Count: ( ${this.state.count})`
        // chaging the browsers TITLE PROPERTY
    }
    
    componentDidUpdate(prevProps, prevState) {
        
        // we can use conditional statements in here to run the title update only if the count vallue has changed

        // helpful when there are multiple update functionslities that are implemented
        // console.log(prevState.count)

        if (prevState.count != this.state.count) {
            document.title = `Count: ( ${this.state.count})`; 
            console.log("componentDidUpdate");
        }
    }
    
  render() {
    return (
      <div>
        <button onClick={() => this.setState((state) => {
            return { count: this.state.count + 1 };
        })  
        // its a good practice to put it in a callback function
        }>
            Count {this.state.count}
        </button>

        <button onClick={() => this.setState((state) => {
            return { age: this.state.age + 1 };
        }) 
         }>
        Lela button
        </button>

        
      </div>
    )
  }
}
