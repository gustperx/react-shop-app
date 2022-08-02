import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { ProductAttributes, productValidationRules } from "../../models";
import { Input, Checkbox, InputSelect, TextEditor, FileUploader } from "../ui";

import { useCategory } from "../../hooks";
import { getSelectOptions, uploadImage } from "../../helpers";

interface Props {
  handleForm: (data: ProductAttributes, files: string[]) => void;
  formValues?: ProductAttributes;
  handleModal?: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<Props> = ({ handleForm, formValues, handleModal }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductAttributes>({
    resolver: yupResolver(productValidationRules),
    defaultValues: formValues,
  });

  const { categories } = useCategory();
  const options = getSelectOptions(categories.map((item) => item.name));

  const [selectedFileOne, setSelectedFileOne] = useState("");
  const [selectedFileTwo, setSelectedFileTwo] = useState("");
  const [selectedFileThree, setSelectedFileThree] = useState("");

  useEffect(() => {
    reset(formValues);
  }, [formValues]);

  const onSubmit: SubmitHandler<ProductAttributes> = async (data) => {

    const imagesFiles = [selectedFileOne, selectedFileTwo, selectedFileThree]
    handleForm(data, imagesFiles);

    if (!handleModal) return;
    handleModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className="flex">
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Product"
              type="text"
              placeholder="My product"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.title}
            />
          )}
        />
      </div>
      <div className="flex">
        <Controller
          name="slug"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Slug"
              type="text"
              placeholder="my-project-abc"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.slug}
            />
          )}
        />
      </div>
      <div className="flex">
        <Controller
          name="categories"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputSelect
              label="Categories"
              handleChange={onChange}
              inputValue={value}
              options={options}
              activeError={errors.categories}
            />
          )}
        />
      </div>
      <div className="flex">
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextEditor
              label="Description"
              inputValue={value}
              handleChange={onChange}
              activeError={errors.description ? true : false}
            />
          )}
        />
      </div>
      <div className="flex">
        <FileUploader
          onFileSelect={setSelectedFileOne}
        />
      </div>
      <div className="flex">
        <FileUploader
          onFileSelect={setSelectedFileTwo}
        />
      </div>
      <div className="flex">
        <FileUploader
          onFileSelect={setSelectedFileThree}
        />
      </div>
      <div className="flex">
        <Controller
          name="visible"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              label="Is visible ?"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.visible}
            />
          )}
        />
      </div>
      <div className="flex">
        <Controller
          name="highlight"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              label="Is highlight ?"
              handleChange={onChange}
              inputValue={value}
              activeError={errors.highlight}
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
