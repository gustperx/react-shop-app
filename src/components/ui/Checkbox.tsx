import { FC } from "react";
import { FieldError } from "react-hook-form";
import { LabelError } from "./";

interface Props {
  label: string;
  handleChange: () => void;
  activeError: FieldError | undefined;
  inputValue?: boolean;
}

export const Checkbox: FC<Props> = ({
  label,
  handleChange,
  activeError,
  inputValue = false,
}) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text mr-4">{label}</span>
        <input
          type="checkbox"
          checked={inputValue}
          onChange={handleChange}
          className={`checkbox ${activeError && "checkbox-secondary"}`}
        />
      </label>
      <label className="label">
        {activeError && <LabelError message={activeError.message} />}
      </label>
    </div>
  );
};
