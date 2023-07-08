import React from "react";

import Input from "../Input";

function PersonalInfo({ formData, setFormData }) {
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <section>
      <h2>Personsal info</h2>
      <fieldset>
        <legend>
          Please provide your name, email address, and phone number.
        </legend>
        <Input
          label="name"
          type="text"
          name="name"
          placeholder="Dave Henson"
          required={true}
          value={formData.name}
          onChange={handleChange}
        >
          Name
        </Input>
        <Input
          label="email"
          type="email"
          name="email"
          placeholder="dave.henson@gmail.com"
          required={true}
          value={formData.email}
          onChange={handleChange}
        >
          Email
        </Input>
        <Input
          label="tel"
          type="tel"
          name="phone"
          placeholder="0744 2260071"
          required={true}
          value={formData.phone}
          onChange={handleChange}
        >
          Phone number
        </Input>
      </fieldset>
    </section>
  );
}

export default PersonalInfo;
