import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../pages/product";
import { CategoryPage } from "../pages/category";
import { MainLayout } from "../components/layouts";
import { Error404 } from "../components";
import { DashboardPage } from "../pages/DashboardPage";

export const MainRouterAdmin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        {/* Portfolio */}
        <Route path="/products" element={<ProductPage />} />
        {/* Language */}
        <Route path="/categories" element={<CategoryPage />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </MainLayout>
  );
};
