import { render, screen } from "@testing-library/react";

import AuthDivider from "../../shared/auth-divider";

describe("Auth Divider", () => {
  it("Renders Correctly", () => {
    render(<AuthDivider />);

    const dividerEle = screen.getByText(/or continue with/i);

    expect(dividerEle).toBeInTheDocument();
  });
});
