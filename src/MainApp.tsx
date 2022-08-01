import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { MainRouter } from "./routers/MainRouter";
import { onAuthState } from "./firebase/auth";
import { useAuth } from "./hooks";

const auth = getAuth();
export const MainApp = () => {
  const { authCallback } = useAuth();

  useEffect(() => {
    onAuthState(authCallback);
  }, [auth]);

  return <MainRouter />;
};
