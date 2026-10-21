import { useState } from 'react'
import CounterHook from './components/CounterHookState'
import CounterUseState from './components/UseState/CounterUseState'
import UseEffect from './components/UseEffect/UseEffect'
import Auth from './components/UseEffect/Auth'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterHook />
      {/* <CounterUseState /> */}

      <UseEffect />
      <Auth />
    </>
  )
}

export default App
