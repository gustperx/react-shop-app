import { ProductList } from "../../components/shop";
import { Alert } from "../../components/ui";
import { useProduct } from "../../hooks";

export const ProductsPage = () => {

  const { getProductsList, loading } = useProduct();

  return (
    <>
      {
        loading
          ? <Alert message="Cargando productos" alert="alert-info" />
          : <ProductList products={getProductsList()} />
      }
    </>
  )
}
