import { useState, useEffect, SetStateAction, Dispatch } from "react";

export const useNameInput: (
  defaultValue: string
) => [string, string | null, Dispatch<SetStateAction<string>>] = (
  defaultValue
) => {
  const [value, setValue] = useState(defaultValue);
  const [tempValue, setTempValue] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    if (tempValue !== value) {
      if (value === "") {
        setErrorMessage("this field is required");
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setErrorMessage("the value must be letter");
      } else {
        setErrorMessage(null);
      }
      setTempValue(value);
    } 
  }, [value, tempValue]);

  return [value, errorMessage, setValue];
};
