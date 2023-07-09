import React from "react";
import * as Label from "@radix-ui/react-label";

import { ValidityContext } from "../ValidityProvider";

import styles from "./Input.module.css";

function Input({
  children,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  const { isValid, setIsValid } = React.useContext(ValidityContext);
  const id = crypto.randomUUID().slice(0, 6);

  function checkValid(event) {
    if (event.target.value.trim() === "") {
      event.target.setAttribute("required", true);
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  return (
    <div>
      <Label.Root htmlFor={id}>{children}</Label.Root>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={checkValid}
      />
      {!isValid && <p>Please enter your {children.toLowerCase()}.</p>}
    </div>
  );
}

export default Input;
