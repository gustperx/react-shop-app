import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { MainRouter } from "./routers/MainRouter";
import { onAuthState } from "./firebase/auth";
import { useAuth, useCategory, useProduct } from "./hooks";

const auth = getAuth();
export const MainApp = () => {
  const { authCallback } = useAuth();

  const { getProducts } = useProduct();
  const { getCategories } = useCategory();

  useEffect(() => {
    getCategories();
    getProducts();
    onAuthState(authCallback);
  }, [auth]);

  return <MainRouter />;
};
