import React from "react";

export default function Todo({ todo, editTodo }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => editTodo(todo.id, !todo.status, todo.task)}
        />
        {todo.task}
      </span>
    </li>
  );
}
