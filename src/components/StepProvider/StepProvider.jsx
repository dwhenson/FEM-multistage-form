import React from "react";

export const StepContext = React.createContext();

function StepProvider({ children }) {
  const [step, setStep] = React.useState(4);

  function incrementStep(event) {
    event.preventDefault();
    setStep(step + 1);
  }

  function decrementStep(event) {
    event.preventDefault();
    setStep(step - 1);
  }

  return (
    <StepContext.Provider
      value={{ step, setStep, incrementStep, decrementStep }}
    >
      {children}
    </StepContext.Provider>
  );
}

export default StepProvider;
