import React from "react";

export default function Todo({ todo }) {
  return <p key={todo}>{todo}</p>;
}
