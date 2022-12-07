import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Button from "../button ";

describe("Button", () => {
  it("RENDER", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
