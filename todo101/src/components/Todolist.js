import React from "react";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";

export default function Todolist() {
  const [todos, setTodos] = React.useState([
    { id: 1, status: false, label: "Withdraw cash" },
    { id: 2, status: false, label: "Buy medicine" },
    { id: 3, status: true, label: "Listen to music" },
    { id: 4, status: true, label: "Walk the dogs" },
    { id: 5, status: false, label: "Play videogames" },
  ]);
  console.log("🚀 ~ file: Todolist.js:13 ~ Todolist ~ todos:", todos);

  function addNewTodo(newTodo) {
    const nextTodos = [...todos, newTodo];
    setTodos(nextTodos);
  }

  function editTodo(updatedTodo) {
    const nextTodos = todos.map((todo) => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    });
    setTodos(nextTodos);
  }

  function deleteTodo(id) {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  }

  return (
    <div>
      <TodoComposer addNewTodo={addNewTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
