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
  onBlur,
}) {
  const { isValid } = React.useContext(ValidityContext);
  const id = crypto.randomUUID().slice(0, 6);

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
        onBlur={onBlur}
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
