import React from "react";
import Todo from "./Todo";

const todos = ["a", "b"];

export default function Todolist() {
  return todos.map((todo) => <Todo todo={todo} />);
}
