import React from "react";

import Input from "../Input";

import styles from "./PersonalInfo.module.css";

function PersonalInfo({ formData, setFormData }) {
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <section className="stack">
      <h2>Personsal info</h2>
      <fieldset className="stack">
        <legend>
          Please provide your name, email address, and phone number.
        </legend>
        <Input
          label="name"
          name="name"
          placeholder="Dave Henson"
          value={formData.name}
          onChange={handleChange}
        >
          Name
        </Input>
        <Input
          label="email"
          name="email"
          placeholder="dave.henson@gmail.com"
          value={formData.email}
          onChange={handleChange}
        >
          Email
        </Input>
        <Input
          label="tel"
          name="phone"
          placeholder="0744 2260071"
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
