import React from "react";

import PersonalInfo from "../PersonalInfo";
import PlanSelect from "../PlanSelect";
import AddOptions from "../AddOptions";
import ConfirmChoices from "../ConfirmChoices/ConfirmChoices";

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
    </form>
  );
}

export default Form;
