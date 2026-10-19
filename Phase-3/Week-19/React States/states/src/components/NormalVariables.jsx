import { Component } from 'react'

export default class NormalVariables extends Component {
  render() {
    let x = 10;
    
    const increment = () => {
        x = x + 1;

        console.log(x); // the value is updating but it won't show on the web because our component is not re-rendering (only getState can make it to re-render)
        return x;
    };
    return (
      <div>
        <h1>Using Normal Variable won't work in React as states</h1>
        <h2>{x}</h2>
        <button onClick={increment}>Add 1</button>
      </div>
    )
  }
}
