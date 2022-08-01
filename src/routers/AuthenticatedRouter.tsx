import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

interface Props {
  redirectPath?: string;
}

export const AuthenticatedRouter: FC<Props> = ({ redirectPath = "/" }) => {
  const { user } = useAuth();

  if (user.logged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
