import { CategoryList } from "../../components/shop";
import { Alert } from "../../components/ui";
import { useCategory, } from "../../hooks";

export const CategoriesPage = () => {

  const { loading } = useCategory();

  return (
    <>
      {
        loading
          ? <Alert message="Cargando categorías" alert="alert-info" />
          : <CategoryList />
      }
    </>
  )
}