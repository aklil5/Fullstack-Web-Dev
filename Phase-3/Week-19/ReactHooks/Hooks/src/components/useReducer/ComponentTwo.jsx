export default function Component2({ state, dispatch }) {
  const increment = () => {
    dispatch({type: "increment"})
  };
  const decrement = () => {
    dispatch({type: "decrement"})
  }
  return (
    <div>
      <br />
      <hr />
      <h1>component two</h1>
      <p>count : {state.count}</p>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
    </div>
  )
}
