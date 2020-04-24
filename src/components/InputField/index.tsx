import React from "react";
import "./index.css";

type InputFieldProps = {
  labelName: string;
  id: string;
  value: string;
  name: string;
  errorMessage: null | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = (props: InputFieldProps) => {
  const { labelName, errorMessage, ...inputProps } = props;
  return (
    <>
      <label className="input-label" htmlFor={inputProps.id}>
        {labelName}
      </label>
      <input className="text-input" {...inputProps} />
      {errorMessage && (
        <small className="text-input-error">{errorMessage}</small>
      )}
    </>
  );
};

export default InputField as React.FC<InputFieldProps>;
