import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import InputPopover from "../../search-form/input-popover";

describe("Input Popover", () => {
  it("Renders Correctly And show child when clicking on it", async () => {
    user.setup();

    render(
      <InputPopover label={"PopOver"} hasValue={false}>
        <div>Hello</div>
      </InputPopover>
    );

    const child = screen.queryByText(/Hello/i);

    expect(child).not.toBeInTheDocument();

    const triggerButton = screen.getByRole("button");

    await user.click(triggerButton);

    const childAfterClick = screen.getByText(/Hello/i);

    expect(childAfterClick).toBeInTheDocument();
  });
});
