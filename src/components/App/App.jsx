import React from "react";

import StepProvider from "../StepProvider";
import Form from "../Form";

import ProgressIndicator from "../ProgressIndicator";

import styles from "./App.module.css";

function App() {
  return (
    <StepProvider>
      <ProgressIndicator />
      <Form />
    </StepProvider>
  );
}

export default App;
