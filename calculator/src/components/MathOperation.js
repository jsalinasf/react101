import { useState } from "react"

function MathOperation ( {operation} ) {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  

  function inputHandler(event) {
    event.target.id === "num1" ? setNum1(event.target.value) : setNum2(event.target.value)
  }

  let answer = 0
  
  switch(operation) {
    case '+':
      answer = Number(num1) + Number(num2)
      break;
    case '-':
      answer = Number(num1) - Number(num2)
      break;
    case '*':
      answer = Number(num1) * Number(num2)
      break;
    case '/':
      answer = Number(num1) / Number(num2)
      break;
    default:
      answer = 'Invalid Math  Operation'
  }  

  return(
    <div style={{display: "flex"}}>
    <input type="number" id="num1" value={num1} onChange={inputHandler}></input>
    <p style={{marginLeft: "5px", marginRight: "5px"}}>{operation}</p>
    <input type="number" id="num2" value={num2} onChange={inputHandler}></input>
    <p style={{marginLeft: "5px", marginRight: "5px"}}>=</p>
    <p>{Number.isInteger(answer) ? answer : answer.toFixed(2)}</p>
  </div>
  )
}

export default MathOperation