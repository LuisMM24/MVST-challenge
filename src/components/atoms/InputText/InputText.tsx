import React from "react";
// styles
import "./InputText.css";
export interface Props {
  placeholder?: string;
  className?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  testId?: string;
}

const InputText: React.FC<Props> = ({
  placeholder,
  className,
  handleChange,
  value,
  testId,
}) => {
  return (
    <input
      data-testid={testId || null}
      className={`inputText ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputText;
