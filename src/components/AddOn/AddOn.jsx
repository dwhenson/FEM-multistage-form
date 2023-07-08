import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

function AddOn({ name, data, setData, children }) {
  return (
    <div>
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
      <label className="Label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
}

export default AddOn;
