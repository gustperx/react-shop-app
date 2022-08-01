import { useEffect } from "react";
import { Alert } from "../components/ui";
import { useLanguage, usePortfolio } from "../hooks";

export const DashboardPage = () => {
  const {
    portfolios,
    getPortfolios,
    loading: loadingPortfolios,
  } = usePortfolio();
  const { languages, getLanguages, loading: loadingLanguages } = useLanguage();

  useEffect(() => {
    getLanguages();
    getPortfolios();
  }, []);

  return (
    <>
      {loadingPortfolios ? (
        <Alert message="Cargando Portfolios" alert="alert-info" />
      ) : (
        ""
      )}

      {loadingLanguages ? (
        <Alert
          message="Cargando lenguajes de programación"
          alert="alert-info"
        />
      ) : (
        ""
      )}

      <h3 className="text-3xl">Portfolios: {portfolios.length}</h3>
      <h3 className="text-3xl">Languages: {languages.length}</h3>
    </>
  );
};
