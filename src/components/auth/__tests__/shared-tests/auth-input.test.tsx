import { render, screen } from "@testing-library/react";
import { Formik } from "formik";

import { AuthInput } from "../../shared";
import { AuthInputProps } from "../../shared/auth-input";

const initialValues = {
  email: "",
};

const onSubmit = () => {};

const inputProps: AuthInputProps = {
  type: "email",
  label: "Email",
  name: "email",
  placeHolder: "your email",
};

describe("Auth Input", () => {
  it("Renders Correctly", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <AuthInput {...inputProps} />
      </Formik>
    );

    const inputEle = screen.getByRole("textbox", { name: /Email/i });

    expect(inputEle).toBeInTheDocument();
  });
});
