import React from "react";

export default function Todo({ todo, editTodo, deleteTodo }) {
  const [label, setLabel] = React.useState(todo.label);
  const [isEditDisabled, setIsEditDisabled] = React.useState(true);

  function handleCheckBoxChange() {
    const updatedTodo = {
      ...todo,
      status: !todo.status,
    };
    editTodo(updatedTodo);
  }

  function handleLabelChange() {
    const updatedTodo = {
      ...todo,
      label: label,
    };
    editTodo(updatedTodo);
  }

  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={handleCheckBoxChange}
        />
      </span>
      <span>
        <input
          value={label}
          disabled={isEditDisabled}
          onChange={(event) => setLabel(event.target.value)}
        />
      </span>
      <span>
        <button
          onClick={() => {
            if (isEditDisabled === false) {
              handleLabelChange();
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
