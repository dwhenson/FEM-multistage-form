import React from "react";

import styles from "./ProgressIndicator.module.css";

import { StepContext } from "../StepProvider/StepProvider";

function Step({ step, children }) {
  const { step: providedStep } = React.useContext(StepContext);

  return (
    <li step={step} aria-current={step === providedStep}>
      <span>
        Step {step}: {children}{" "}
        <span className="visually-hidden">
          {step < providedStep ? "completed" : "not-completed"}
        </span>
      </span>
    </li>
  );
}

function ProgressIndicator() {
  return (
    <div aria-label="progress">
      <ol>
        <Step step={1}>Your info</Step>
        <Step step={2}>Select Plan</Step>
        <Step step={3}>Add-ons</Step>
        <Step step={4}>Summary</Step>
      </ol>
    </div>
  );
}

export default ProgressIndicator;
