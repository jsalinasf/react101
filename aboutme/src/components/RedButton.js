import { useState } from "react"
import Counters from "./Counters"

function RedButton( { style, children} ) {

  // useState Hook using multiple (slice) states
  const [ increase, setIncrease] = useState(0)
  const [ decrease, setDecrease] = useState(10)

  // useState Hook using one state (object) state
  const [counters, setCounter] = useState({"forwards": 0, "backwards": 10})

  function buttonOnePressedHandler() {
    // when your new state depends on a previous state
    // NEVER change it directly
    // USE a helper-function to update it
    // Hence the use of: prevIncrease
    setIncrease(prevIncrease => prevIncrease + 1)
    setDecrease(prevDecrease => prevDecrease - 1)
  }

  function buttonTwoPressedHandler() {
    // when your new state depends on a previous state
    // NEVER change it directly
    // USE a helper-function to update it
    // Hence the use of: prevData
    setCounter(prevData => ({
      forwards: prevData.forwards + 1,
      backwards: prevData.backwards - 1
    }))    
  }

  return (
    // Testing React events - onClick calls a function as an event response
    <>
    <div>
      <h3>Slice States - multiple useState Hooks</h3>
      <Counters forwards={increase} backwards={decrease} />
      <button style={ style } onClick={ buttonOnePressedHandler}>
        {children}
      </button>
    </div>
    <div>
      <h3>Single State - one big object/array maging all the state variables</h3>
      <Counters forwards={counters.forwards} backwards={counters.backwards} />
      <button style={ style } onClick={ buttonTwoPressedHandler}>
        {children}
      </button>
    </div>
    </>
  )
}

export default RedButton