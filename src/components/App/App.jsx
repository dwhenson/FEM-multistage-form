import React from "react";

import StepProvider from "../StepProvider";
import Form from "../Form";
import ProgressIndicator from "../ProgressIndicator";

import styles from "./App.module.css";

function App() {
  return (
    <StepProvider>
      <div className={`withSideBar ${styles.wrapper}`}>
        <ProgressIndicator />
        <Form />
      </div>
    </StepProvider>
  );
}

export default App;
