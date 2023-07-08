import React from "react";

import Button from "../Button";

import { StepContext } from "../StepProvider/StepProvider";

import addOnOptions from "../../data/addOnOptions";
import prices from "../../data/prices";

function ConfirmChoices({ formData }) {
  const { frequency, plan, addons } = formData;
  const { setStep } = React.useContext(StepContext);

  function findAddon(addonSelected) {
    return addOnOptions.find((addonOption) => addonSelected === addonOption.id);
  }

  function total() {
    return Object.entries(addons).reduce(
      (runningTotal, [plan, _isSelected]) => {
        return addons[plan]
          ? (runningTotal += prices[frequency][plan])
          : runningTotal;
      },
      prices[frequency].plan[plan]
    );
  }

  const duration = formData.frequency === "monthly" ? "mo" : "yr";

  return (
    <section>
      <h2>Finishing up</h2>
      <fieldset>
        <legend>Double check everything looks OK before confirming.</legend>
        <ul>
          <li>
            {plan} ({frequency})
            <Button
              action={() => {
                setStep(2);
              }}
            >
              Change
            </Button>
            <div>
              {prices[frequency].plan[plan]}/{duration}
            </div>
          </li>
          {Object.entries(addons).map(([addon, isSelected]) => {
            if (isSelected) {
              const selectedAddon = findAddon(addon);
              return (
                <li key={selectedAddon.id}>
                  {selectedAddon.label}
                  <div>
                    {prices[frequency][selectedAddon.id]}/{duration}
                  </div>
                </li>
              );
            }
          })}
          <li>
            Total (per {frequency.slice(0, -2)})
            <div>
              {total()}/{duration}
            </div>
          </li>
        </ul>
      </fieldset>
    </section>
  );
}

export default ConfirmChoices;
