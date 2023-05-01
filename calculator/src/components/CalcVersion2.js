import { useState } from "react"
import ShowResult from "./ShowResult"
import RenderOperation from "./RenderOperation"

function CalcVersion2() {

  // Lifting state from children to parent
  // Look how setFunctions are passsed to children component
  const [enteredNumbers, setEnteredNumbers] = useState({num1: 0, num2: 0})
  const [chosenOperation, setChosenOperation] = useState('add')  

  function onNum1Change(event) {
    setEnteredNumbers((prevData) => ({
      num1: event.target.value,
      num2: prevData.num2
    }))
  }

  function onNum2Change(event) {
    setEnteredNumbers((prevData) => ({
      num1: prevData.num1,
      num2: event.target.value
    }))
  }

  function onOperationChange(event) {
    setChosenOperation(event.target.value)
  }  

  // result couldn't be a state because infinte renders
  // so result is a computed field
  let result = 0

  switch(chosenOperation) {
    case 'add':
      result = +enteredNumbers.num1 + +enteredNumbers.num2
      break;
    case 'substract':
      result = +enteredNumbers.num1 - +enteredNumbers.num2
      break;
    case 'multiply':
      result = +enteredNumbers.num1 * +enteredNumbers.num2
      break;
    case 'division':
      result = +enteredNumbers.num1 / +enteredNumbers.num2
      break;
    default:
      result = "error"
  }

  return(
    <div style={{display: "flex"}}>
      <RenderOperation num1={enteredNumbers.num1} num2={enteredNumbers.num2} onNum1Change={onNum1Change} onNum2Change={onNum2Change} onOperationChange={onOperationChange}/>
      <p style={{marginLeft: "5px", marginRight: "5px"}}>=</p>      
      <ShowResult result={result} />
    </div>
  )
}

export default CalcVersion2