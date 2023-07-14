import React from "react";

import styles from "./Button.module.css";

function Button({ disabled = false, style, action, children }) {
  return (
    <button
      style={style}
      className={styles.button}
      disabled={disabled}
      onClick={action}
    >
      {children}
    </button>
  );
}

export default Button;
