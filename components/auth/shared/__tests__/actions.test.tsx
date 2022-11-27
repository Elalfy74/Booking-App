import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Actions from "../actions";

describe("Actions", () => {
  it("Renders Correctly", () => {
    const actionProps = {
      text: "This is Text",
      label: "Label",
      path: "#",
    };

    render(<Actions {...actionProps} />);

    const textRegex = new RegExp(actionProps.text, "i");

    const textEle = screen.getByText(textRegex);

    expect(textEle).toBeInTheDocument();
  });
});
