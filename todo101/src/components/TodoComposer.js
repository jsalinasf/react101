import React from "react";

export default function TodoComposer({ addNewTodo }) {
  const [newTodo, setNewTodo] = React.useState("");
  const newTodoRef = React.useRef();

  React.useEffect(() => {
    newTodoRef.current.focus();
  }, []);

  // Input newTodo
  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  // button Add newTodo
  function handleClick() {
    addNewTodo(newTodo);
    setNewTodo("");
  }

  return (
    <div className="wrapperTodoComposer">
      <label htmlFor="inputNewTodo">New To-Do:</label>
      <input
        id="inputNewTodo"
        ref={newTodoRef}
        type="text"
        value={newTodo}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
