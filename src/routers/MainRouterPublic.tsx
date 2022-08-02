import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";
import { ShopLayout } from "../components/layouts";
import { HomePage } from "../pages/public";

export const MainRouterPublic = () => {
  return (
    <ShopLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/categories" element={<HomePage />} />
        <Route path="/category/:id" element={<HomePage />} />

        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:slug" element={<HomePage />} />

        <Route path="/search" element={<HomePage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </ShopLayout>
  );
};
