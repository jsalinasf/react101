import { useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";

function FormUserInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail() {
    if (email.search("@") !== -1) return true;
    return false;
  }

  function inputEmailHandler(event) {
    setEmail(event.target.value);
  }

  function inputPasswordHandler(event) {
    setPassword(event.target.value);
  }

  function buttonSubmitHandler(event) {
    event.preventDefault();
    if (!validateEmail) {
    }
  }

  function buttonResetHandler(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div className="form-wrapper">
      <form className="form-display">
        <Label config={{ htmlFor: "email" }} className="form-label">
          Email:
        </Label>
        <Input
          config={{
            type: "text",
            id: "email",
            value: email,
            onChange: inputEmailHandler,
          }}
          className="form-input"
        ></Input>
        <Label config={{ htmlFor: "password" }} className="form-label">
          Password:
        </Label>
        <Input
          config={{
            type: "text",
            id: "password",
            value: password,
            onChange: inputPasswordHandler,
          }}
          className="form-input"
        ></Input>
        <Button
          config={{ onClick: buttonSubmitHandler }}
          className="form-button"
        >
          Submit
        </Button>
        <Button
          config={{ onClick: buttonResetHandler }}
          className="form-button"
        >
          Reset
        </Button>
      </form>
    </div>
  );
}

export default FormUserInput;
