import React from "react";

export const ValidityContext = React.createContext();

function ValidityProvider({ children }) {
  const [isValid, setIsValid] = React.useState(true);

  return (
    <ValidityContext.Provider value={{ isValid, setIsValid }}>
      {children}
    </ValidityContext.Provider>
  );
}

export default ValidityProvider;
