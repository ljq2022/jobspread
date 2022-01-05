import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string().required("Please enter your email."),
  password: yup.string().required("Please enter a password."),
});
