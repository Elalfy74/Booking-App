import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import AuthHeading from "../../shared/auth-heading";

const label = "This is Label";

describe("Auth Heading", () => {
  it("Renders Correctly", () => {
    render(<AuthHeading>{label}</AuthHeading>);

    const HeadingEle = screen.getByRole("heading", { name: /This is Label/i });

    expect(HeadingEle).toBeInTheDocument();
  });
});
