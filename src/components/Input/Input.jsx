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
  const { isValid, setIsValid, setIsDisabled } =
    React.useContext(ValidityContext);
  const id = crypto.randomUUID().slice(0, 6);

  function checkValid(event) {
    // Simple validation to check if input is completed
    if (event.target.value.trim() === "") {
      event.target.setAttribute("required", true);
      const newIsValid = { ...isValid };
      newIsValid[event.target.name].valid = false;
      newIsValid[event.target.name].verified = true;
      setIsValid(newIsValid);
    } else {
      const newIsValid = { ...isValid };
      newIsValid[event.target.name].valid = true;
      newIsValid[event.target.name].verified = true;
      setIsValid(newIsValid);
    }
    // Check if every input has been completed
    if (
      Object.values(isValid).every((validity) => validity.valid === true) &&
      Object.values(isValid).every((validity) => validity.verified === true)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  return (
    <div className={styles.InputWrapper}>
      <Label.Root htmlFor={id}>{children}</Label.Root>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={checkValid}
        className={styles.Input}
      />
      {isValid[name].verified && !isValid[name].valid && (
        <p className={styles.errorMessage}>
          Please enter your {children.toLowerCase()}
        </p>
      )}
    </div>
  );
}

export default Input;
