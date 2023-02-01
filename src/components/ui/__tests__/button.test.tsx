import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Button from "../button ";

describe("Button", () => {
  it("Should Render Correctly", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should Render as a Span ", () => {
    render(<Button as="span">As Span</Button>);

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();

    const spanEle = screen.getByText(/as span/i);

    expect(spanEle).toBeInTheDocument();
  });
});
