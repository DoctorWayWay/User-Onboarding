// Importing Libraries
import * as yup from "yup";

const addUserFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Please input a username.")
    .min(2, "Username must be 2 or more characters."),
  email: yup
    .string()
    .email("Invalid email. Please try again.")
    .required("Please input an email."),
  password: yup
    .string()
    .trim()
    .required("Please input a password.")
    .min(8, "Password must be 8 or more characters."),
  termsOfService: yup
    .boolean()
    .oneOf(
      [true],
      "You must accept our terms of service in order to continue."
    ),
});

export default addUserFormSchema;
