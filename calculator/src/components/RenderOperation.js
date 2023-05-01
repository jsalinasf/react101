function RenderOperation( {num1, num2, onNum1Change, onNum2Change, onOperationChange} ) {

  return(
    <>
      <input type="number" id="num1" value={num1} onChange={onNum1Change}></input>
      <select onChange={onOperationChange}>
        <option value="add">+</option>
        <option value="substract">-</option>
        <option value="multiply">*</option>
        <option value="division">/</option>
      </select>
      <input type="number" id="num2" value={num2} onChange={onNum2Change}></input>
    </>
  )
}

export default RenderOperation