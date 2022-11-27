import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Heading from "../heading";

describe("Heading", () => {
  it("Renders Correctly", () => {
    const label = "This is Label";

    render(<Heading label={label} />);

    const HeadingEle = screen.getByRole("heading", { name: /This is Label/i });

    expect(HeadingEle).toBeInTheDocument();
  });
});
