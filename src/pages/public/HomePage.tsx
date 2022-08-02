import { ProductList } from "../../components/shop";
import { Alert } from "../../components/ui";
import { useProduct } from "../../hooks";

export const HomePage = () => {

  const { getProductsListHome, loading } = useProduct();

  return (
    <>
      {
        loading
          ? <Alert message="Cargando productos" alert="alert-success" />
          : <ProductList products={getProductsListHome()} />
      }
    </>
  )
}
