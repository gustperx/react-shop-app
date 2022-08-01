import { login, logout } from "../store/slices/auth";
import { useAppDispatch, useAppSelector } from "./";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const authCallback = (user: any) => {
    if (user) {
      dispatch(
        login({
          name: user.displayName,
          email: user.email,
          logged: true,
        })
      );
    } else {
      dispatch(logout());
    }
  };

  return {
    authCallback,
    user,
  };
};
