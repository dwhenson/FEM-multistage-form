import React from "react";

import Button from "../Button";
import SummaryModal from "../SummaryModal";

import { StepContext } from "../StepProvider";
import { ValidityContext } from "../ValidityProvider";

import styles from "./FormNavigation.module.css";

function FormNavigation({ formData, setFormData }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { step, setStep, incrementStep, decrementStep } =
    React.useContext(StepContext);
  const { isDisabled } = React.useContext(ValidityContext);

  function completeForm() {
    setIsOpen(!isOpen);
    setFormData(
      (formData = {
        name: "",
        email: "",
        phone: "",
        frequency: "monthly",
        plan: "arcade",
        addons: {},
      })
    );
    setStep(1);
  }

  function showModal(event) {
    event.preventDefault();
    setIsOpen(true);
    console.log("Sending the data to back end:", formData);
  }

  return (
    <div className={styles.navigationWrapper}>
      {step > 1 && (
        <Button
          action={decrementStep}
          style={{
            "--bg": "var(--clr-neutral-100",
            "--fg": "var(--clr-neutral-500)",
            "--hv-fg": "var(--clr-neutral-400)",
            "--hv-bg": "var(--clr-neutral-100)",
          }}
        >
          Go Back
        </Button>
      )}
      {step < 4 && (
        <Button action={incrementStep} disabled={isDisabled}>
          Next Step
        </Button>
      )}
      {step === 4 && <Button action={showModal}>Confirm</Button>}
      <SummaryModal title={"Thank you!"} boolean={isOpen} action={completeForm}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </SummaryModal>
    </div>
  );
}

export default FormNavigation;
