import React, { useState } from 'react'

export default function CounterHook() {
  const [count, setCount] = useState(0);

    // count will have the initial value
  // setCount method - to change the value of count

  const [age, setAge] = useState(22)
  const [fruit, setFruit] = useState("banana")

  const fruitAmt = () => {
    // fruit = fruit + 10; //Never do tis. It wont update it
    // console.log(fruit)
    // setFruit(fruit + 1)

    setFruit(prevState => {
      return prevState + 1;
      // use the updater function
    })
  }
  


  console.log(useState(0))   // its an array with initial value: 0 and an updating function  - so we destructure it to count, setCount or other, setOther
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)
      }>
        Count: {count}
      </button>
      <br />
      {age}
      <button onClick={() => setAge((age) => age + 1)}>Age</button>
      
      <h2>{fruit}</h2>
      <button onClick={fruitAmt}>Add Fruit Amount</button>
    </div>
  )
}
