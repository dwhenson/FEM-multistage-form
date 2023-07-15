import React from "react";
import AddOn from "../AddOn";

import addOnOptions from "../../data/addOnOptions";
import prices from "../../data/prices";

function AddOns({ formData, setFormData }) {
  const duration = formData.frequency === "monthly" ? "mo" : "yr";

  return (
    <section className="stack">
      <h2>Pick add-ons</h2>
      <fieldset className="stack">
        <legend>Add-ons help enhance your gaming experience.</legend>
        {addOnOptions.map(({ id, label, description }) => (
          <AddOn key={id} name={id} data={formData} setData={setFormData}>
            <div className="stack">
              <p style={{ fontWeight: "700" }}>{label}</p>
              <p style={{ color: "var(--clr-neutral-500)" }}>{description}</p>
            </div>
            <p style={{ color: "var(--clr-primary-300)" }}>
              +${prices[formData.frequency][id]}/{duration}
            </p>
          </AddOn>
        ))}
      </fieldset>
    </section>
  );
}

export default AddOns;
