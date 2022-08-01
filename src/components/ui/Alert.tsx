import { FC } from "react";

interface Props {
  message: string;
  alert: string;
}

export const Alert: FC<Props> = ({ message, alert }) => {
  return (
    <div className={`alert ${alert} shadow-lg my-4`}>
      <div>
        <span className="text-gray-50 font-semibold">{message}</span>
      </div>
    </div>
  );
};
