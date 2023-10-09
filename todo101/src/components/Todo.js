import React from "react";

export default function Todo({ todo, editTodo, deleteTodo }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => editTodo(todo.id, !todo.status, todo.task)}
        />
      </span>
      <span>
        <input placeholder={todo.task} disabled />
      </span>
      <span>
        <button>edit</button>
      </span>
      <span>
        <button onClick={() => deleteTodo(todo.id)}>delete</button>
      </span>
    </li>
  );
}
