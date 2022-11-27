import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import AuthDivider from "../auth-divider";

describe("Divider", () => {
  it("Renders Correctly", () => {
    render(<AuthDivider />);

    const dividerEle = screen.getByText(/or continue with/i);

    expect(dividerEle).toBeInTheDocument();
  });
});
