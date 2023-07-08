import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import Toggle from "../Toggle/Toggle";

import plans from "../../data/plans";
import prices from "../../data/prices";

import styles from "./PlanSelect.module.css";

function PlanSelect({ formData, setFormData }) {
  const duration = formData.frequency === "monthly" ? "mo" : "yr";

  return (
    <section>
      <h2>Select your plan</h2>
      <fieldset>
        <legend>You have the option of monthly or yearly billing.</legend>
        <RadioGroup.Root
          onValueChange={(event) => setFormData({ ...formData, plan: event })}
          aria-label="Select your plan"
          className={styles.RadioGroupRoot}
          defaultValue={"arcade"}
        >
          {plans.map((plan, index) => (
            <div key={index}>
              <RadioGroup.Item
                id={plan}
                value={plan}
                name="plan"
                checked={formData.plan === plan}
                className={styles.RadioGroupItem}
              >
                <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
              </RadioGroup.Item>
              <label htmlFor={plan} className={styles.Label}>
                {plan}
                {formData.frequency === "yearly" && "2 months free"}
                {prices[formData.frequency].plan[plan]}/{duration}
              </label>
            </div>
          ))}
        </RadioGroup.Root>
        <Toggle formData={formData} setFormData={setFormData} />
      </fieldset>
    </section>
  );
}

export default PlanSelect;
