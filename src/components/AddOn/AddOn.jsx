import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import styles from "./AddOn.module.css";

function AddOn({ name, data, setData, children }) {
  return (
    <div className={styles.addon}>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Checkbox.Root
          id={name}
          className={styles.CheckboxRoot}
          checked={data.addons[name]}
          onCheckedChange={() =>
            setData({
              ...data,
              addons: { ...data.addons, [name]: !data.addons[name] },
            })
          }
        >
          <Checkbox.Indicator className={styles.CheckboxIndicator}>
            <CheckIcon width={30} height={30} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label
        style={{ "--bespoke-space": "var(--space-2xs)" }}
        className={styles.label}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}

export default AddOn;
