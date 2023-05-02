import { useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";

function FormUserInput() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  function validateEmail() {
    if (email.search("@") === -1) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  }

  function validatePassword() {
    if (password.length < 7) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }

  function inputEmailHandler(event) {
    setEmail(event.target.value);
  }

  function inputPasswordHandler(event) {
    setPassword(event.target.value);
  }

  function buttonSubmitHandler(event) {
    event.preventDefault();
  }

  function buttonResetHandler(event) {
    event.preventDefault();
    setEmail("");
    setIsEmailValid(true);
    setPassword("");
    setIsPasswordValid(true);
  }

  return (
    <div className="form-wrapper">
      <form className="form-display">
        <Label
          config={{ htmlFor: "email" }}
          className={!isEmailValid && "form-label-error"}
        >
          Email:
        </Label>
        <Input
          config={{
            type: "text",
            id: "email",
            value: email,
            onChange: inputEmailHandler,
            onBlur: validateEmail,
          }}
          className={!isEmailValid && "form-input-error"}
        ></Input>
        <Label
          config={{ htmlFor: "password" }}
          className={!isPasswordValid && "form-label-error"}
        >
          Password:
        </Label>
        <Input
          config={{
            type: "text",
            id: "password",
            value: password,
            onChange: inputPasswordHandler,
            onBlur: validatePassword,
          }}
          className={!isPasswordValid && "form-input-error"}
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
