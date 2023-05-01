import { useState } from "react"

function ManageInput() {
  
  const [email, setEmail] = useState('')

  // Using state to compute new values
  const numOfCharacters = email.length

  function emailInputHandler(event) {
    setEmail(event.target.value)
  }

  function resetButtonHandler() {
    setEmail('')
  }

  return (
    <>
      <h3>Managing Input fields (update field as input is received)</h3>      
      <label htmlFor="email">Email: </label>            
      <input type="email" id="email" value={email} onChange={emailInputHandler} placeholder="Your email address"></input>
      <p>Characters: {numOfCharacters}</p>      
      <button style={{ padding: "5px 25px", fontSize: "Large", color: "#CCC", backgroundColor: "#111" }} onClick={resetButtonHandler}>Reset</button>
    </>
  )
}

export default ManageInput