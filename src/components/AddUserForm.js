// Importing Libraries
import React, { useState } from "react";
import addUserFormSchema from "../schemas/addUserSchema.js";
import * as yup from "yup";

// Importing Form Data
import {
  initialFormValues,
  initialFormErrors,
} from "./../data/addUserFormData.js";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

// Component
const AddUserForm = (props) => {
  // Destructuring
  const { setUsers, users } = props;

  // State Management
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  // Helpers
  const validate = (name, value) => {
    yup
      .reach(addUserFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  // Event Handlers
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    validate(name, inputValue);
    setFormValues({ ...formValues, [name]: inputValue });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        console.log("Post user successful!");
        setUsers([newUser, ...users]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Creating newUser object
    const newUser = {
      firstName: formValues.firstName,
      email: formValues.email,
      id: users.length + 1,
    };
    postNewUser(newUser);
  };
  // Disable/Enable button if form is valid
  useEffect(() => {
    addUserFormSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  // Returning Form Component
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New User</h1>

      {/* If there are validation errors, show them below */}
      <div>
        <p>{formErrors.firstName}</p>
        <p>{formErrors.email}</p>
        <p>{formErrors.password}</p>
        <p>{formErrors.termsOfService}</p>
      </div>

      {/* Form Inputs are Below */}
      <label>
        Name:
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        By checking you agree to the terms of service:
        <input
          type="checkbox"
          name="termsOfService"
          checked={formValues.termsOfService}
          onChange={handleChange}
        />
      </label>
      <br />
      <button id="submitButton" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default AddUserForm;
