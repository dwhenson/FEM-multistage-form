import React from "react";

import StepProvider from "../StepProvider";
import Form from "../Form";
import FormNavigation from "../FormNavigation";
import ProgressIndicator from "../ProgressIndicator";

import styles from "./App.module.css";

function App() {
  return (
    <StepProvider>
      <ProgressIndicator />
      <Form />
      <FormNavigation />
    </StepProvider>
  );
}

export default App;
