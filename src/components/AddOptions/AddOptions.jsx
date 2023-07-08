import React from "react";
import AddOn from "../AddOn";

import addOnOptions from "../../data/addOnOptions";
import prices from "../../data/prices";

function AddOns({ formData, setFormData }) {
  const duration = formData.frequency === "monthly" ? "mo" : "yr";

  return (
    <section>
      <h2>Pick add-ons</h2>
      <fieldset>
        <legend>Add-ons help enhance your gaming experience.</legend>
        {addOnOptions.map(({ id, label, description }) => (
          <AddOn key={id} name={id} data={formData} setData={setFormData}>
            {label}
            {description}
            {prices[formData.frequency][id]}/{duration}
          </AddOn>
        ))}
      </fieldset>
    </section>
  );
}

export default AddOns;
