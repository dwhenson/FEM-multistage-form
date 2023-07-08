import React from "react";
import * as Label from "@radix-ui/react-label";

function Input({
  children,
  type = "text",
  name,
  required,
  placeholder,
  value,
  onChange,
}) {
  const id = crypto.randomUUID().slice(0, 6);

  return (
    <div>
      <Label.Root htmlFor={id}>{children}</Label.Root>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
