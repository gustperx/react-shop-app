import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ProductList } from "../../components/shop";
import { useShop } from "../../hooks";

export const ByCategoryPage = () => {

  const { getProductsByCategory } = useShop()

  const { name = "" } = useParams();
  const products = useMemo(() => getProductsByCategory(name), [name]);

  if (products.length === 0) {
    return <Navigate to="/categories?q=no-results" />;
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-12">Categoría: {name.toUpperCase()}</h1>
      <ProductList products={products} />
    </>
  )
}
