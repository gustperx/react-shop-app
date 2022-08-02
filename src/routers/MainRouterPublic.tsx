import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";
import { ShopLayout } from "../components/layouts";
import { ByCategoryPage, CategoriesPage, HomePage, ProductsPage, SimpleProductPage } from "../pages/public";

export const MainRouterPublic = () => {
  return (
    <ShopLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:name" element={<ByCategoryPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:slug" element={<SimpleProductPage />} />

        <Route path="/search" element={<HomePage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </ShopLayout>
  );
};
