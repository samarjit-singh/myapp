import React from "react";

// this is how to type onChnage event in a input element
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={handleInputChange}
        placeholder="hello"
      />
    </div>
  );
};

export default Input;
