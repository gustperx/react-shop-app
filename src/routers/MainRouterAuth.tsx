import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";
import { ShopLayout } from "../components/layouts";
import { LoginPage } from "../pages/auth";

export const MainRouterAuth = () => {
  return (
    <ShopLayout>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </ShopLayout>
  );
};
