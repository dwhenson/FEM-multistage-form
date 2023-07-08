import React from "react";

import Button from "../Button";
import SummaryModal from "../SummaryModal";

import { StepContext } from "../StepProvider";

import styles from "./FormNavigation.module.css";

function FormNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { step, incrementStep, decrementStep } = React.useContext(StepContext);

  function completeForm() {
    setIsOpen(!isOpen);
    console.log("Sending the data to back end....");
  }

  return (
    <>
      {step > 1 && <Button action={decrementStep}>Go Back</Button>}
      {step < 4 && <Button action={incrementStep}>Next Step</Button>}
      {step === 4 && <Button action={() => setIsOpen(true)}>Confirm</Button>}
      <SummaryModal title={"Thank you"} boolean={isOpen} action={completeForm}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </SummaryModal>
    </>
  );
}

export default FormNavigation;
