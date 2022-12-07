import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import CityInput from "../../search-form/inputs/city-input/city-input";

describe("City Input", () => {
  it("Renders Correctly with the selected name", () => {
    render(
      <CityInput
        placeholder="any"
        selected={{
          id: 1,
          name: "Cairo",
        }}
        handleSelect={() => {}}
      />
    );

    const input = screen.getByRole("combobox");

    expect(input).toHaveDisplayValue(/cairo/i);
  });

  it("Renders Correctly the placeholder without selected ", () => {
    render(
      <CityInput placeholder="any" selected={null} handleSelect={() => {}} />
    );

    const input = screen.getByPlaceholderText(/any/i);

    expect(input).toBeInTheDocument();
  });
});
