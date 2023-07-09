import React from "react";

import ValidityProvider from "../ValidityProvider";
import PersonalInfo from "../PersonalInfo";
import PlanSelect from "../PlanSelect";
import AddOptions from "../AddOptions";
import ConfirmChoices from "../ConfirmChoices/ConfirmChoices";
import FormNavigation from "../FormNavigation";

import { StepContext } from "../StepProvider/StepProvider";

function Form() {
  const { step } = React.useContext(StepContext);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    frequency: "monthly",
    plan: "arcade",
    addons: {},
  });

  return (
    <ValidityProvider>
      <form>
        {step === 1 && (
          <PersonalInfo formData={formData} setFormData={setFormData} />
        )}
        {step === 2 && (
          <PlanSelect formData={formData} setFormData={setFormData} />
        )}
        {step === 3 && (
          <AddOptions formData={formData} setFormData={setFormData} />
        )}
        {step === 4 && (
          <ConfirmChoices formData={formData} setFormData={setFormData} />
        )}
        <FormNavigation formData={formData} />
      </form>
    </ValidityProvider>
  );
}

export default Form;
