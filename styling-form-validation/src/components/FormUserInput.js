import { useState } from "react";

function FormUserInput() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-wrapper">
      <form className="form-display">
        <label className="form-label" htmlFor="username">
          Username:
        </label>
        <input type="text" id="username" className="form-input"></input>
        <label className="form-label" htmlFor="password">
          Password:
        </label>
        <input type="Password" id="password" className="form-input"></input>
        <button className="form-button" type="submit">
          Submit
        </button>
        <button className="form-button">Reset</button>
      </form>
    </div>
  );
}

export default FormUserInput;
