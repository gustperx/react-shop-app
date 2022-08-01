import { Alert } from "../../components/ui";
import { TableList } from "../../components/category";
import { useCategory } from "../../hooks";

export const CategoryPage = () => {
  const { categories, errorMessage } = useCategory();

  return (
    <>
      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <TableList categories={categories} />
    </>
  );
};
