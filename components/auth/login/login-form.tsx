import { Form, Formik } from "formik";

import Button from "../../ui/button ";
import Input from "../shared/Input";
import {
  loginInitialValues,
  LoginInputsType,
  loginValidationSchema,
} from "./login-form-helpers";

const LoginForm = () => {
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
          <Input
            label="Email addresss"
            name="Email"
            placeHolder="Enter your email"
            type="email"
          />
        </div>

        <div className="mt-4">
          <Input
            label="Password"
            name="Password"
            placeHolder="Enter your password"
            type="password"
          />
        </div>

        <a
          href="#"
          className="block mt-2 text-xs text-right text-primary-80 hover:text-primary hover:underline"
        >
          Forget Password?
        </a>

        <Button fullWidth type="submit" className="mt-6 tracking-wide">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
