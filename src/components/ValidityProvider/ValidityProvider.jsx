import React from "react";

export const ValidityContext = React.createContext();

function ValidityProvider({ children }) {
  const [isValid, setIsValid] = React.useState({
    name: { valid: true, verified: false },
    email: { valid: true, verified: false },
    phone: { valid: true, verified: false },
  });
  const [isDisabled, setIsDisabled] = React.useState(true);

  return (
    <ValidityContext.Provider
      value={{ isValid, setIsValid, isDisabled, setIsDisabled }}
    >
      {children}
    </ValidityContext.Provider>
  );
}

export default ValidityProvider;
