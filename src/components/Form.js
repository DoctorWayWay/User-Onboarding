import React from "react";

const Form = (props) => {
  const { values } = props;
  // Submit Helper
  const onSubmit = (event) => {
    event.preventDefault();
  };
  // Returning Form Component
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="username"
          value={values.username}
          // onChange={onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          // onChange={onChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={values.password}
          // onChange={onChange}
        />
      </label>
      <label>
        By checking you agree to the terms of service:
        <input
          type="checkbox"
          name="termsOfService"
          checked={values.termsOfService}
          // onChange={onChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
