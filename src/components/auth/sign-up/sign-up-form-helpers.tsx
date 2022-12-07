import * as Yup from "yup";

export type SignUpInputsType = {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
};

export const signUpValidationSchema = Yup.object({
  Firstname: Yup.string().min(2).max(30).required("First Name is required"),
  Lastname: Yup.string().min(2).max(30).required("Last Name is required"),
  Email: Yup.string().email("Email is invalid").required("Email is required"),
  Password: Yup.string().min(6).max(30).required("Password is required"),
});

export const signupInitialValues: SignUpInputsType = {
  Firstname: "",
  Lastname: "",
  Email: "",
  Password: "",
};
