import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioInput from "./index";

describe("test RadioInput component", () => {
  it("component should show init label and check status correctly", () => {
    const { getByLabelText, getByDisplayValue } = render(
      <RadioInput
        name="TestRadioInput"
        value="RadioInputValue"
        id="RadioInputId"
        displayValue="RadioInputDisplayValue"
        checked={false}
        onChange={(f) => {}}
      />
    );

    const input = getByDisplayValue("RadioInputValue");
    const label = getByLabelText("RadioInputDisplayValue");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("component should pass correct value when input changed", (done) => {
    const handleInputChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void = (event) => {
      expect(event.currentTarget.value).toBe("RadioInputValueB");
      expect(event.currentTarget.checked).toBe(true);
      done();
    };

    const { getByLabelText } = render(
      <>
        <RadioInput
          name="TestRadioInput"
          value="RadioInputValueA"
          id="RadioInputIdA"
          displayValue="RadioInputDisplayValueA"
          checked={false}
          onChange={handleInputChange}
        />
        <RadioInput
          name="TestRadioInput"
          value="RadioInputValueB"
          id="RadioInputIdB"
          displayValue="RadioInputDisplayValueB"
          checked={false}
          onChange={handleInputChange}
        />
      </>
    );

    const labelB = getByLabelText("RadioInputDisplayValueB");
    fireEvent.click(labelB);
  });
});
