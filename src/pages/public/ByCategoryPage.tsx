import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ProductList } from "../../components/shop";
import { useProduct } from "../../hooks";

export const ByCategoryPage = () => {

  const { getProductsByCategory } = useProduct()

  const { name = "" } = useParams();
  const products = useMemo(() => getProductsByCategory(name), [name]);

  if (products.length === 0) {
    return <Navigate to="/categories?q=no-results" />;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  )
}
