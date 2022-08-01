import { FC } from "react";
import Select from "react-select";
import { LabelError } from ".";
import { ISelectInput } from "../../types";

interface Props {
  label: string;
  options: ISelectInput[];
  handleChange: () => void;
  activeError: any;
  inputValue: ISelectInput[];
}

export const InputSelect: FC<Props> = ({
  label,
  options,
  inputValue,
  handleChange,
  activeError,
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <Select
        value={inputValue}
        onChange={handleChange}
        options={options}
        isMulti
      />

      <label className="label">
        {activeError && <LabelError message={activeError.message} />}
      </label>
    </div>
  );
};
