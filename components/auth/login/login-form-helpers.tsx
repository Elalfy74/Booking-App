import * as Yup from "yup";

export type LoginInputsType = {
  Email: string;
  Password: string;
};

export const loginValidationSchema = Yup.object({
  Email: Yup.string().email("Email is invalid").required("Email is required"),
  Password: Yup.string().min(6).max(30).required("Password is required"),
});

export const loginInitialValues: LoginInputsType = {
  Email: "",
  Password: "",
};
