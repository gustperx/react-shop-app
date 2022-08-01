import { TableList } from "../../components/product";
import { Alert } from "../../components/ui";
import { useProduct } from "../../hooks/useProduct";

export const ProductPage = () => {
  const { products, errorMessage } = useProduct();

  return (
    <>
      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <TableList products={products} />
    </>
  );
};
