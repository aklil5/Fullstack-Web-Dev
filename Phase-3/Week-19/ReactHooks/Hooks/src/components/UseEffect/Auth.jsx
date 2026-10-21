import React, { useState } from 'react'
import Login from './Login'
import LoggedOut from './LoggedOut';

export default function Auth() {
    const [show, setShow] = useState(false);

    const status = () => {
        setShow(!show);
    };
  return (
    <div>
        <h1>Auth</h1>
      <div>{show ? <Login /> : <LoggedOut />} </div>
      <button onClick={status}>{show ? "Log Out" : "Log In"} </button>
    </div>
  )
}
