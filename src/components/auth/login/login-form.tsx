import { Form, Formik } from "formik";

import useAuthModal, { ModalContent } from "../../../store/auth-modal-store";
import { Button } from "../../ui";
import { AuthInput } from "../shared";
import {
  loginInitialValues,
  LoginInputsType,
  loginValidationSchema,
} from "./login-form-helpers";

const LoginForm = () => {
  const changeContent = useAuthModal((state) => state.changeContent);

  const handleSubmit = (values: LoginInputsType) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <Form noValidate>
        <div>
          <AuthInput
            label="Email addresss"
            name="Email"
            placeHolder="Enter your email"
            type="email"
          />
        </div>

        <div className="mt-4">
          <AuthInput
            label="Password"
            name="Password"
            placeHolder="Enter your password"
            type="password"
          />
        </div>

        <button
          onClick={() => changeContent(ModalContent.PASSWORD_RECOVERY)}
          className="mt-2 block text-right text-xs text-primary-80 hover:text-primary hover:underline"
        >
          Forget Password?
        </button>

        <Button fullWidth type="submit" className="mt-6 tracking-wide">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
