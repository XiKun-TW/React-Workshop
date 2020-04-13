import React from "react";

type RadioInputProps = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  displayValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput = ({ displayValue, ...inputProps }: RadioInputProps) => (
  <label htmlFor={inputProps.id}>
    <input type="radio" {...inputProps} />
    {displayValue}
  </label>
);

export default RadioInput as React.FC<RadioInputProps>;
