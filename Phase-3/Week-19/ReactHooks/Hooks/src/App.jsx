import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './components/useReducer/reducer';

import CounterHook from './components/CounterHookState'
import CounterUseState from './components/UseState/CounterUseState'
import UseEffect from './components/UseEffect/UseEffect'
import Auth from './components/UseEffect/Auth'
import Component1 from './components/UseContext/Component1'

import './App.css'
import UsingUseContext from './components/UseContext/UsingUseContext'

import ComponentOne from './components/useReducer/ComponentOne'
import ComponentTwo from './components/useReducer/ComponentTwo'


// first create context
export const MyContext = createContext();
console.log(createContext())
  // its an object with Consumer and Provider components


function App() {
  // declaring useReducer once in the parent component
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <CounterHook /> */}
      {/* <CounterUseState /> */}

      {/* <UseEffect /> */}
      {/* <Auth /> */}

      {/* <div className="App">
        <MyContext.Provider value={"Abebe beso bela"}>
          <Component1 />  
          {/* available for Component1 and its children */}
        {/* </MyContext.Provider> */}
      {/* </div>  */}
      
      <ComponentOne state={state}/>
      <ComponentTwo state={state} dispatch={dispatch}/>
      
      
      
    </>
  )
}

export default App
