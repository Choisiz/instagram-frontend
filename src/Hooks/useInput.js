import { useState } from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    console.log("d", value);
  };

  return { value, onChange, setValue };
};

export default useInput;
