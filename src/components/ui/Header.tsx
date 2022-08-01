import { FC } from "react";

interface Props {
  title: string;
  textAction: string;
  handleAction: () => void;
}

export const Header: FC<Props> = ({ title, textAction, handleAction }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <button className="btn btn-ghost" onClick={handleAction}>
          {textAction}
        </button>
      </div>
    </div>
  );
};
