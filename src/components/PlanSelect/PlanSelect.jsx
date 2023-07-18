import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import ArcadeIcon from "../ArcadeIcon";
import ProIcon from "../ProIcon";
import AdvancedIcon from "../AdvancedIcon";
import Toggle from "../Toggle";

import plans from "../../data/plans";
import prices from "../../data/prices";

import styles from "./PlanSelect.module.css";

function PlanSelect({ formData, setFormData }) {
  const duration = formData.frequency === "monthly" ? "mo" : "yr";

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function Icons(icon) {
    const components = {
      arcade: ArcadeIcon,
      pro: ProIcon,
      advanced: AdvancedIcon,
    };
    const PlanIcon = components[icon];
    return <PlanIcon />;
  }

  return (
    <section className="stack">
      <h2>Select your plan</h2>
      <fieldset className="stack">
        <legend>You have the option of monthly or yearly billing.</legend>
        <RadioGroup.Root
          onValueChange={(event) => setFormData({ ...formData, plan: event })}
          aria-label="Select your plan"
          className="switcher"
          defaultValue={"arcade"}
        >
          {plans.map((plan, index) => (
            <div key={index} className={styles.radioWrapper}>
              <RadioGroup.Item
                id={plan}
                value={plan}
                name="plan"
                checked={formData.plan === plan}
                className={styles.RadioGroupItem}
              >
                <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
              </RadioGroup.Item>
              <label
                htmlFor={plan}
                style={{
                  "--max-size": "75%",
                  "--bespoke-gap": "var(--space-l)",
                }}
                className={`withSideBar ${styles.label}`}
              >
                {Icons(plan)}
                <div
                  style={{ "--bespoke-space": "var(--space-2xs)" }}
                  className="stack"
                >
                  <p style={{ fontWeight: "700" }}>{capitalize(plan)}</p>
                  <p
                    className={styles.price}
                    style={{ color: "var(--clr-neutral-500)" }}
                  >
                    ${prices[formData.frequency].plan[plan]}/{duration}
                  </p>
                  <p>{formData.frequency === "yearly" && "2 months free"}</p>
                </div>
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
