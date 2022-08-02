import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useProduct } from "../../hooks";


export const SimpleProductPage = () => {

  const { getProductBySlug } = useProduct()

  const { slug = "" } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>{product.title}</h1>
    </>
  )
}
