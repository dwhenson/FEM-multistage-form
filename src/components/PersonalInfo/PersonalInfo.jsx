import React from "react";

import Input from "../Input";

import { ValidityContext } from "../ValidityProvider";

import styles from "./PersonalInfo.module.css";

function PersonalInfo({ formData, setFormData }) {
  const { isValid, setIsValid, setIsDisabled } =
    React.useContext(ValidityContext);

  function allowProgress() {
    if (
      Object.values(isValid).every((validity) => validity.valid === true) &&
      Object.values(isValid).every((validity) => validity.verified === true)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  function checkValid(event) {
    // Simple validation to check if input is completed
    if (event.target.value.trim() === "") {
      event.target.setAttribute("required", true);
      const newIsValid = { ...isValid };
      newIsValid[event.target.name].valid = false;
      newIsValid[event.target.name].verified = true;
      setIsValid(newIsValid);
    } else {
      const newIsValid = { ...isValid };
      newIsValid[event.target.name].valid = true;
      newIsValid[event.target.name].verified = true;
      setIsValid(newIsValid);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (isValid[event.target.name].verified) {
      checkValid(event);
      allowProgress();
    }
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
          onBlur={checkValid}
        >
          Name
        </Input>
        <Input
          label="email"
          name="email"
          placeholder="dave.henson@gmail.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={checkValid}
        >
          Email
        </Input>
        <Input
          label="tel"
          name="phone"
          placeholder="0744 2260071"
          value={formData.phone}
          onChange={handleChange}
          onBlur={checkValid}
        >
          Phone number
        </Input>
      </fieldset>
    </section>
  );
}

export default PersonalInfo;
