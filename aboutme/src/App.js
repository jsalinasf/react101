import './App.css';
import AboutMe from './components/AboutMe'
import Goal from './components/Goal'
import RedButton from './components/RedButton';
import data from './components/data'
import ConditionalRendering from './components/ConditionalRendering';
import ManageInput from './components/ManageInput'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <AboutMe />      
      
      <hr />

      <h2>Mapping Array and Iteration</h2>
      <h3>My goals are:</h3>
      {/* Trying iteration on React */}
      {/* mapping array data using map */}      
      { data.map(goal => <Goal key={goal.id} title={goal.title} description={goal.description}/>) }

      <hr />

      <h2>React State</h2>      
      {/* The following component is using props and CHILDREN props */}
      <RedButton style={ {color: "white", backgroundColor: "crimson", padding: "5px 25px", fontSize: "large"} }>Count</RedButton>

      <hr />

      <h2>Conditional Rendering</h2>
      {/* The following component is using Conditional Rendering */}
      <ConditionalRendering />

      <hr />

      <h2>Two-Way Binding</h2>      
      < ManageInput />

      < hr />
      <Footer />

    </div>
  )
}

export default App