import React, {useState, useEffect } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(45);

    // takes two arguments
    // when the 2nd argt is changed, the 1st argument runs
    useEffect(() => {
        document.title = `Count: ${count}`;

        // if we were to call setCount() here
        // it will cause a problem by creating an INFINITE LOOP
    }, [count])

  return (
    <div>
      <h1>Use Effect</h1>
      <div className='valueHolder'>
        <h3>The value of count is: {count}</h3>
        <h3>The value of age is: {age}</h3>
      </div>

      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  )
}
