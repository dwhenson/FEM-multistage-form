import React from "react";

import Button from "../Button";

import { StepContext } from "../StepProvider/StepProvider";

import addOnOptions from "../../data/addOnOptions";
import prices from "../../data/prices";

import styles from "./ConfirmChoices.module.css";

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

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section className="stack">
      <h2>Finishing up</h2>
      <fieldset className="stack">
        <legend>Double check everything looks OK before confirming.</legend>
        <ul role="list" className={styles.listWrapper}>
          <li
            className={styles.listItem}
            style={{
              "--bespoke-space": "var(--space-3xs)",
            }}
          >
            <div className="stack">
              <p style={{ fontWeight: "700" }}>
                {capitalize(plan)} ({capitalize(frequency)})
              </p>

              <Button
                style={{
                  "--bg": "var(--clr-neutral-100",
                  "--fg": "var(--clr-neutral-500)",
                  "--hv-fg": "var(--clr-neutral-400)",
                  "--hv-bg": "var(--clr-neutral-100)",
                }}
                className={styles.Button}
                action={() => {
                  setStep(2);
                }}
              >
                Change
              </Button>
            </div>
            <p style={{ fontWeight: "700" }}>
              ${prices[frequency].plan[plan]}/{duration}
            </p>
          </li>
          {Object.entries(addons).map(([addon, isSelected]) => {
            if (isSelected) {
              const selectedAddon = findAddon(addon);
              return (
                <li
                  key={selectedAddon.id}
                  className={styles.listItem}
                  style={{ color: "var(--clr-neutral-500)" }}
                >
                  <p>{selectedAddon.label}</p>
                  <p style={{ color: "var(--clr-primary-400)" }}>
                    +${prices[frequency][selectedAddon.id]}/{duration}
                  </p>
                </li>
              );
            }
          })}
        </ul>
        <div className={styles.total}>
          Total (per {frequency.slice(0, -2)})
          <div style={{ color: "var(--clr-primary-300)", fontWeight: "900" }}>
            ${total()}/{duration}
          </div>
        </div>
      </fieldset>
    </section>
  );
}

export default ConfirmChoices;
