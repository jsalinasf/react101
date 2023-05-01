import { useState } from "react"

function RenderList() {

  const [taskList, setTaskList] = useState([])
  const [inputTask, setInputTask] = useState('')    

  function newInputHandler(event){
    setInputTask(event.target.value)
  }

  function addButtonHandler() {
    setTaskList(currentTaskList => [...currentTaskList,{"id": crypto.randomUUID(), "name": inputTask}])
    setInputTask("")
  }

  return(
    <div>
      <section>
        <h2>My To-Do List</h2>
        <ul>
          { taskList.length > 0 && taskList.map(item => <li key={item.id}>{item.name}</li>) }
        </ul>
      </section>
      <section>
        <label style={{marginRight: ".5rem"}} htmlFor="newTask">New Task:</label>
        <input style={{marginRight: ".5rem"}} type="text" placeholder="Insert your new task" id="newTask" value={inputTask} onChange={newInputHandler}></input>
        <button style={{padding: ".1rem 1rem"}} onClick={addButtonHandler}>Add</button>        
      </section>
    </div>
  )
}

export default RenderList