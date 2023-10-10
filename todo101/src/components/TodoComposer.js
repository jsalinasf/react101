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
  function handleSubmit(event) {
    event.preventDefault();
    const newId = window.crypto.randomUUID();
    addNewTodo({ id: newId, status: false, task: newTodo });
    setNewTodo("");
    newTodoRef.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputNewTodo">New To-Do:</label>
        <input
          id="inputNewTodo"
          ref={newTodoRef}
          type="text"
          value={newTodo}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
