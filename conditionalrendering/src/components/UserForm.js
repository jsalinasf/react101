import { useState } from "react"

function UserForm() {

  const [email, setEmail] = useState('')

  function inputBlurHandler(event) {
    setEmail(event.target.value)    
  }

  function submitButtonPressedHandler(event){
    event.preventDefault()
  }  

  return(
    <form style={{width: "200px", display: "flex", flexDirection: "column", marginLeft:"1rem"}}>
      <label htmlFor="email" style={{marginBottom: "1rem"}}>Email address:</label>
      <input type="text" placeholder="Your email address" id="email" onBlur={inputBlurHandler} style={{marginBottom: "1rem"}}></input>            
      <button onClick={submitButtonPressedHandler}>Submit</button>
      { email.search('@') === -1 && <p style={{color:"red", fontWeight:"bold"}}>Invalid email address!</p> }
    </form>
  )
}

export default UserForm