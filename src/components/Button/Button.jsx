import React from "react";

import styles from "./Button.module.css";

function Button({ children, action }) {
  return <button onClick={action}>{children}</button>;
}

export default Button;
