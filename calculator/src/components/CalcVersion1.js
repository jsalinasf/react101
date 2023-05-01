import MathOperation from "./MathOperation"

function CalcVersion1() {
  return (
    <div>
      <MathOperation operation={'+'} />
      <MathOperation operation={'-'} />
      <MathOperation operation={'*'} />
      <MathOperation operation={'/'} />
    </div>
  )
}

export default CalcVersion1