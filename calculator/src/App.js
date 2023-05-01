import CalcVersion1 from "./components/CalcVersion1"
import CalcVersion2 from "./components/CalcVersion2"

function App() {
  return(
    <div>
      <h1>React Basic Calculator</h1>
      <div>
        <h2>Version 1</h2>
        <CalcVersion1 />
      </div>
      <div>
        <h2>Version 2</h2>
        <CalcVersion2 />
      </div>
    </div>
  )
}

export default App