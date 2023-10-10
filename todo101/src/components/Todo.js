import React from "react";

export default function Todo({ todo, editTodo, deleteTodo }) {
  const [task, setTask] = React.useState(todo.task);
  const [isEditDisabled, setIsEditDisabled] = React.useState(true);
  const taskRef = React.useRef();

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
        <input
          ref={taskRef}
          value={task}
          disabled={isEditDisabled}
          onChange={(event) => setTask(event.target.value)}
        />
      </span>
      <span>
        <button
          onClick={() => {
            if (isEditDisabled === false) {
              editTodo(todo.id, todo.status, task);
            }
            setIsEditDisabled(!isEditDisabled);
          }}
        >
          {isEditDisabled === true ? "edit" : "save"}
        </button>
      </span>
      <span>
        <button onClick={() => deleteTodo(todo.id)}>delete</button>
      </span>
    </li>
  );
}
