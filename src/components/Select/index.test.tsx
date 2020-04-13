import React from "react";
import { render } from "@testing-library/react";
import Select, { SelectItem } from "./index";

describe("test select component", () => {
  let testItems: SelectItem[] = [];

  beforeEach(() => {
    testItems = [
      { value: "valueA", text: "textA", isSelected: false },
      { value: "valueB", text: "textB", isSelected: false },
      { value: "valueC", text: "textC", isSelected: false },
    ];
  });

  it("single select should show init value correctly", () => {
    testItems[1].isSelected = true;
    const { getByLabelText, getByTitle } = render(
      <Select
        id="TestId"
        name="TestName"
        items={testItems}
        labelName="TestLabel"
        onItemClicked={(f) => {}}
      />
    );

    const select = getByTitle("TestLabel") as HTMLSelectElement;
    const label = getByLabelText("TestLabel");

    expect(label).toBeInTheDocument();
    expect(select.selectedOptions.length).toBe(1);
    expect(select.selectedOptions[0].text).toBe("textB");
  });

  it("multiple select should show init value correctly", () => {
    testItems[1].isSelected = true;
    testItems[2].isSelected = true;
    const { getByLabelText, getByTitle } = render(
      <Select
        id="TestId"
        name="TestName"
        items={testItems}
        labelName="TestLabel"
        onItemClicked={(f) => {}}
        isMultiple
      />
    );

    const select = getByTitle("TestLabel") as HTMLSelectElement;
    const label = getByLabelText("TestLabel");

    expect(label).toBeInTheDocument();
    expect(select.selectedOptions.length).toBe(2);
    expect(select.selectedOptions[0].text).toBe("textB");
    expect(select.selectedOptions[1].text).toBe("textC");
  });
});
