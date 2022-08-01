import { TableList } from "../../components/product";
import { Alert } from "../../components/ui";
import { usePortfolio } from "../../hooks/useProduct";

export const PortfolioPage = () => {
  const { products, errorMessage } = usePortfolio();

  return (
    <>
      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <TableList products={products} />
    </>
  );
};
