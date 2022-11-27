import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Formik } from "formik";

import Input, { InputProps } from "../Input";

describe("Input", () => {
  it("Renders Correctly", () => {
    const initialValues = {
      email: "",
    };

    const onSubmit = () => {};

    const inputProps: InputProps = {
      type: "email",
      label: "Email",
      name: "email",
      placeHolder: "your email",
    };

    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Input {...inputProps} />
      </Formik>
    );

    const labelRegex = new RegExp(inputProps.label, "i");

    const inputEle = screen.getByRole("textbox", { name: labelRegex });

    expect(inputEle).toBeInTheDocument();
  });
});
