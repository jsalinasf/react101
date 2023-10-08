import React from "react";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";

export default function Todolist() {
  const [todos, setTodos] = React.useState([
    { id: 1, task: "Withdraw cash" },
    { id: 2, task: "Buy medicine" },
    { id: 3, task: "Listen to music" },
    { id: 4, task: "Walk the dogs" },
    { id: 5, task: "Play videogames" },
  ]);

  function addNewTodo(newTodo) {
    const nextTodos = [...todos, newTodo];
    setTodos(nextTodos);
  }

  return (
    <div>
      <TodoComposer addNewTodo={addNewTodo} />
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
}
