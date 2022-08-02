import { ProductList } from "../../components/shop";
import { Alert } from "../../components/ui";
import { useShop } from "../../hooks";

export const HomePage = () => {

  const { getProductsListHome, loading } = useShop();

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
