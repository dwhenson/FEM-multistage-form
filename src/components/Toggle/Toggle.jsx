import React from "react";
import * as Switch from "@radix-ui/react-switch";

import styles from "./Toggle.module.css";

function Toggle({ formData, setFormData }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label
        className={styles.Label}
        htmlFor="frequency"
        style={{ paddingRight: 15 }}
      >
        Yearly
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
    </div>
  );
}

export default Toggle;
