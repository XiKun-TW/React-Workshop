import React, { FunctionComponent, useState } from "react";
import "./index.css";

export type SelectItem = {
  id: string;
  value: string;
  isSelected: boolean;
};

type SelectProps = {
  id: string;
  items: SelectItem[];
  isMultiple?: boolean;
  onItemClicked: (item: SelectItem) => void;
};

const Select = ({ items, isMultiple, onItemClicked }: SelectProps) => {
  const [isOpen, setOpenStatus] = useState(false);

  const selectedValues = items
    .filter(item => item.isSelected)
    .map(item => item.value)
    .join(";");
  const selectedIds = items
    .filter(item => item.isSelected)
    .map(item => item.id);

  const handleSelectChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void = e => {
    const selectedValue = e.target.value;
    const values = selectedValue.split(";");
    items.forEach(item => {
      if (values.includes(item.id) && !item.isSelected) {
        onItemClicked(item);
      }
    });
  };

  return (
    <div className={`select-container ${isOpen ? "is-open" : ""}`}>
      <div
        className="selected-item"
        onClick={() => {
          setOpenStatus(!isOpen);
        }}
      >
        {selectedValues === "" ? "Please select" : selectedValues}
      </div>
      <div className="select-cover" onClick={() => setOpenStatus(false)}></div>
      <ul className="select-options-container">
        {items.map(item => (
          <li
            className={`select-option ${item.isSelected ? "is-select" : ""}`}
            key={item.id}
            onClick={() => {
              !isMultiple &&  setOpenStatus(false);
              onItemClicked(item);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
      <select
        multiple={isMultiple}
        value={isMultiple ? selectedIds : selectedIds.join(';')}
        className="native-select"
        onChange={handleSelectChange}
      >
        {items.map(item => (
          <option key={item.id} value={item.id}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select as FunctionComponent<SelectProps>;
