import { FC } from "react";
import { FieldError } from "react-hook-form";
import { LabelError } from "./";

interface Props {
  label: string;
  placeholder?: string;
  handleChange: () => void;
  activeError: FieldError | undefined;
  inputValue?: string;
}

export const Textarea: FC<Props> = ({
  label,
  placeholder,
  handleChange,
  activeError,
  inputValue = "",
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className={`textarea textarea-bordered h-24 ${
          activeError && "textarea-secondary"
        }`}
        placeholder={placeholder}
        onChange={handleChange}
        value={inputValue}
      ></textarea>
      <label className="label">
        {activeError && <LabelError message={activeError.message} />}
      </label>
    </div>
  );
};
