import { render, screen } from "@testing-library/react";

import Actions from "../../shared/auth-actions";

const actionProps = {
  text: "This is Text",
  label: "Label",
  path: "#",
};

describe("Auth Actions", () => {
  it("Renders Correctly", () => {
    render(<Actions {...actionProps} />);

    const textEle = screen.getByText(/This is Text/i);

    expect(textEle).toBeInTheDocument();
  });
});
