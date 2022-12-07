import * as Yup from "yup";

export type PasswordRecoveryInputsType = {
  Email: string;
};

export const passwordRecoveryValidationSchema = Yup.object({
  Email: Yup.string().email("Email is invalid").required("Email is required"),
});

export const passwordRecoveryInitialValues: PasswordRecoveryInputsType = {
  Email: "",
};
