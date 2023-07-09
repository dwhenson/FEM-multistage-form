import React from "react";

import styles from "./Button.module.css";

function Button({ disabled = false, action, children }) {
  return (
    <button disabled={disabled} onClick={action}>
      {children}
    </button>
  );
}

export default Button;
