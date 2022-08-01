import { ISelectInput } from "../types";

export const getSelectOptions = (data: string[]): ISelectInput[] => {
  const options = data.map((item) => ({ label: item, value: item }));

  return options;
};
