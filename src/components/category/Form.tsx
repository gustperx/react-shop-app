import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CategoryAttributes, categoryValidationRules } from "../../models";
import { Input } from "../ui";

interface Props {
  handleForm: (data: CategoryAttributes) => void;
  formValues?: CategoryAttributes;
  handleModal?: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<Props> = ({ handleForm, formValues, handleModal }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryAttributes>({
    resolver: yupResolver(categoryValidationRules),
    defaultValues: formValues,
  });

  useEffect(() => {
    reset(formValues);
  }, [formValues]);

  const onSubmit: SubmitHandler<CategoryAttributes> = (data) => {
    handleForm(data);

    if (!handleModal) return;
    handleModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Name"
              type="text"
              placeholder="Shoes"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.name}
            />
          )}
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <button className="btn btn-outline btn-info btn-wide">Save</button>
      </div>
    </form>
  );
};
