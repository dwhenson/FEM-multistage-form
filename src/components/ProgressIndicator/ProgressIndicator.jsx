import React from "react";

import styles from "./ProgressIndicator.module.css";

import { StepContext } from "../StepProvider/StepProvider";

function Step({ step, children }) {
  const { step: providedStep } = React.useContext(StepContext);

  return (
    <li
      step={step}
      aria-current={step === providedStep}
      className={styles.listItem}
    >
      <div
        className={`stack box ${styles.content}`}
        style={{
          "--bespoke-space": "var(--space-3xs)",
          "--fg": "var(--clr-neutral-100)",
          "--bg": "transparent",
          "--padding": "var(--space-3xs)",
        }}
      >
        <p style={{ color: "var(--clr-primary-200)" }}>Step {step}</p>
        <p style={{ letterSpacing: "0.5px" }}>{children}</p>
        <p className="visuallyHidden">
          {step < providedStep ? "completed" : "not-completed"}
        </p>
      </div>
    </li>
  );
}

function ProgressIndicator() {
  return (
    <div aria-label="progress" className={`box ${styles.ProgressIndicator}`}>
      <ol role="list" className={styles.list}>
        <Step className={styles.Step} step={1}>
          Your info
        </Step>
        <Step className={styles.Step} step={2}>
          Select Plan
        </Step>
        <Step className={styles.Step} step={3}>
          Add-ons
        </Step>
        <Step className={styles.Step} step={4}>
          Summary
        </Step>
      </ol>
    </div>
  );
}

export default ProgressIndicator;
