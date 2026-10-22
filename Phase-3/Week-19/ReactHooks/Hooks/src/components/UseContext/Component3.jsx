import React, { createContext } from 'react'
import { MyContext } from '../../App'

export default function Component3() {
  return (
    <div>
        <MyContext.Consumer>
            {(data) => {
                return (
                    <div>
                        <h1>The last child</h1>
                        <p>Using context API: {data}</p>
                    </div>
                )
            }}
            
        </MyContext.Consumer>
      
    </div>
  )
}
