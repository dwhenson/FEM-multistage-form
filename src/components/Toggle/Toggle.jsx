import React from "react";
import * as Switch from "@radix-ui/react-switch";

import styles from "./Toggle.module.css";

function Toggle({ formData, setFormData }) {
  return (
    <div className={styles.ToggleWrapper}>
      <label className={styles.label} htmlFor="frequency">
        <span
          className={
            formData.frequency === "monthly"
              ? `${styles.selected}`
              : `${styles.notSelected}`
          }
        >
          Monthly
        </span>
      </label>
      <Switch.Root
        id="frequency"
        aria-label="Select monthly or yearly billing"
        checked={formData.frequency === "monthly" ? false : true}
        onCheckedChange={() => {
          const period =
            formData.frequency === "monthly" ? "yearly" : "monthly";
          setFormData({ ...formData, frequency: period });
        }}
        className={styles.SwitchRoot}
      >
        <Switch.Thumb className={styles.SwitchThumb} />
      </Switch.Root>
      <label className={styles.label} htmlFor="frequency">
        <span
          className={
            formData.frequency === "yearly"
              ? `${styles.selected}`
              : `${styles.notSelected}`
          }
        >
          Yearly
        </span>
      </label>
    </div>
  );
}

export default Toggle;
