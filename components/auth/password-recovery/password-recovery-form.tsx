import { Form, Formik } from "formik";

import Button from "../../ui/button ";
import Input from "../shared/Input";
import {
  passwordRecoveryInitialValues,
  passwordRecoveryValidationSchema,
} from "./password-recovery-form-helpers";

const PasswordRecoveryForm = () => {
  const hanldeSubmit = () => {};
  return (
    <Formik
      onSubmit={hanldeSubmit}
      initialValues={passwordRecoveryInitialValues}
      validationSchema={passwordRecoveryValidationSchema}
    >
      <Form>
        <Input
          label="E-mail"
          name="Email"
          placeHolder="Enter your email"
          type="email"
        />
        <Button className="mt-6 tracking-wide" fullWidth type="submit">
          Reset Password
        </Button>
      </Form>
    </Formik>
  );
};

export default PasswordRecoveryForm;
