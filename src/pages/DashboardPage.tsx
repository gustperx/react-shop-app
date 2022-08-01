import { useEffect } from "react";
import { Alert } from "../components/ui";
import { useCategory, usePortfolio } from "../hooks";

export const DashboardPage = () => {
  const {
    products,
    getProducts,
    loading: loadingProducts,
  } = usePortfolio();
  const { categories, getCategories, loading: loadingCategories } = useCategory();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <>
      {loadingProducts ? (
        <Alert message="Cargando productos" alert="alert-info" />
      ) : (
        ""
      )}

      {loadingCategories ? (
        <Alert
          message="Cargando categorias"
          alert="alert-info"
        />
      ) : (
        ""
      )}

      <h3 className="text-3xl">Productos: {products.length}</h3>
      <h3 className="text-3xl">Categorias: {categories.length}</h3>
    </>
  );
};
