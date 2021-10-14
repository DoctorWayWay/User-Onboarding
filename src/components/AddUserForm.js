// Importing Libraries
import React, { useState } from "react";
import * as yup from "yup";

// Importing Form Data
import {
  initialFormValues,
  initialFormErrors,
} from "./../data/addUserFormData.js";

// Component
const AddUserForm = () => {
  // State Management
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // Helpers
  const validate = () => {};

  // Event Handlers
  const handleChange = (event) => {
    // If the input is a checkbox...
    if (event.target.type === "checkbox") {
      // ...use the "checked" value to update formValues...
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.checked,
      });
    } else {
      // ...otherwise, use the input value, itself.
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Returning Form Component
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New User</h1>

      {/* If there are validation errors, show them below */}
      <div>
        <p>{formErrors.username}</p>
        <p>{formErrors.email}</p>
        <p>{formErrors.password}</p>
        <p>{formErrors.termsOfService}</p>
      </div>

      {/* Form Inputs are Below */}
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formValues.username}
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
      <button>Submit</button>
    </form>
  );
};

export default AddUserForm;
