import { FC } from "react";
import { FieldError } from "react-hook-form";
import { LabelError } from "./";

interface Props {
  type: string;
  label: string;
  placeholder?: string;
  handleChange: () => void;
  activeError: FieldError | undefined;
  inputValue?: string;
}

export const Input: FC<Props> = ({
  type,
  label,
  placeholder,
  handleChange,
  inputValue = "",
  activeError,
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${
          activeError && "input-secondary"
        }`}
        onChange={handleChange}
        value={inputValue}
        autoComplete="off"
      />
      <label className="label">
        {activeError && <LabelError message={activeError.message} />}
      </label>
    </div>
  );
};
