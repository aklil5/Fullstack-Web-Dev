import React, { useState, useEffect } from 'react'

export default function UseEffectForTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Component is mounted")
  }, []);

  useEffect(() => {
    document.title = `Clicks: ${count}`
  }, [count])

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      <p>Click Count: {count}</p>
    </div>
  )
}
