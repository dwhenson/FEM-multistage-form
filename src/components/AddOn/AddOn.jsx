import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import styles from "./AddOn.module.css";

function AddOn({ name, data, setData, children }) {
  return (
    <div className={styles.addon}>
      <Checkbox.Root
        id={name}
        checked={data.addons[name]}
        onCheckedChange={() =>
          setData({
            ...data,
            addons: { ...data.addons, [name]: !data.addons[name] },
          })
        }
      >
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        style={{ "--bespoke-space": "var(--space-2xs)" }}
        className={`stack ${styles.label}`}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}

export default AddOn;
