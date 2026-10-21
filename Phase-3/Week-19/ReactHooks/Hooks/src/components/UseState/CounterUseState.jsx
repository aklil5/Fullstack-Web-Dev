import { useState } from 'react';

export default function CounterUseState() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(24)

    const [car, setCar] = useState({
        brand: "ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    })

    const updateColor = () => {
        // setCar({
        //     color: 'blue'
        // }) // this way is not recommended
        // it will drop the above STATES -> brand, model, year

        // the right way (SOLUTION)
        // Use CALLBACK FUNCTION
        setCar((prevState) => ({
            ...prevState,
            color: "blue",
        }))
    }

  return (
    <div>
        <hr />
        <button
            onClick={() => {
                setCount((count) => count + 1)
                setAge((age) => age + 1);
            }}
        >
            Count: {count}
        </button>
      
        <br />
        <hr />
        <h1>Why using Callback function is good when updating states</h1>
        <h3>my {car.brand}</h3>
        <h2>Its a <span className={car.color}>{car.model}</span> from {' '} {car.year}.</h2>

        <button type='button' onClick={updateColor}>Change Collor To Blue</button>

    </div>
  )
}
