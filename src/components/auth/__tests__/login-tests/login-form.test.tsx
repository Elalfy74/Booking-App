import { logRoles, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import LoginForm from "../../login/login-form";

describe("Login Form", () => {
  it("Should Show Error When Blur the email field", async () => {
    render(<LoginForm />);
    user.setup();

    const emailInput = screen.getByRole("textbox", { name: /email addresss/i });
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, "a");
    await user.type(passwordInput, "a");

    const errorMessage = screen.getByText(/email is invalid/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
