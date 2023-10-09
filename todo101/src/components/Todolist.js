import React from "react";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";

export default function Todolist() {
  const [todos, setTodos] = React.useState([
    { id: 1, status: false, task: "Withdraw cash" },
    { id: 2, status: false, task: "Buy medicine" },
    { id: 3, status: true, task: "Listen to music" },
    { id: 4, status: true, task: "Walk the dogs" },
    { id: 5, status: false, task: "Play videogames" },
  ]);

  function addNewTodo(newTodo) {
    const nextTodos = [...todos, newTodo];
    setTodos(nextTodos);
  }

  function editTodo(id, status, task) {
    const nextTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, id: id, status: status, task: task }
        : todo;
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
