import { Form, Formik } from "formik";

import Button from "../../ui/button";
import { AuthInput } from "../shared";
import {
  signupInitialValues,
  SignUpInputsType,
  signUpValidationSchema,
} from "./sign-up-form-helpers";

const SignUpForm = () => {
  const handleSubmit = (values: SignUpInputsType) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={signupInitialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <Form noValidate>
        <div className="flex flex-col gap-4 md:flex-row">
          <AuthInput
            label="First Name"
            placeHolder="First Name"
            type="text"
            name="Firstname"
          />

          <AuthInput
            label="Last Name"
            name="Lastname"
            placeHolder="Last Name"
            type="text"
          />
        </div>

        <div className="mt-4">
          <AuthInput
            label="Email"
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

        <Button fullWidth type="submit" className="mt-6 tracking-wide">
          Sign up
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
