import { FC } from "react";

interface Props {
  message: string | undefined;
}

export const LabelError: FC<Props> = ({ message }) => {
  return <span className="label-text-alt">{message}</span>;
};
