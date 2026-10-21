import React, { useEffect } from 'react'

export default function Login() {
    useEffect(() => {
        console.log("Hi, component is muonting")

        // Timer
        let x = 0;
        let visitTime = setInterval(
            () => {
                console.log(`Visit time - ${++x} sec`)
            }, 1000
        )

        return() => {
            // console.log("Bye, I'm unmounting")
            // alert("You've successfully logged out")

            // Stop the timer 
            clearInterval(visitTime)

        }
    }, [])

    
  return (
    <div>
      <h1>User Logged In</h1>
    </div>
  )
}
