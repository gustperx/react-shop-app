import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import queryString from "query-string";

import { CategoryList } from "../../components/shop";
import { Alert } from "../../components/ui";
import { useCategory, } from "../../hooks";

export const CategoriesPage = () => {

  const { loading } = useCategory();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  return (
    <>
      {
        q && <Alert message="No existen productos en la categoría seleccionada" alert="alert-success" />
      }
      {
        loading
          ? <Alert message="Cargando categorías" alert="alert-success" />
          : <CategoryList />
      }
    </>
  )
}