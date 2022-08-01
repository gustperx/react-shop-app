import { TableList } from "../../components/portfolio";
import { Alert } from "../../components/ui";
import { usePortfolio } from "../../hooks/usePortfolio";

export const PortfolioPage = () => {
  const { portfolios, errorMessage } = usePortfolio();

  return (
    <>
      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <TableList portfolios={portfolios} />
    </>
  );
};
