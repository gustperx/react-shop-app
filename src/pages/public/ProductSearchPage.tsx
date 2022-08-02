import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

import queryString from "query-string";
import { useForm, useShop } from "../../hooks";
import { ProductList } from "../../components/shop";
import { Alert } from "../../components/ui";

export const ProductSearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { searchProductByName } = useShop()

  const { q = "" } = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);
  const { searchText } = formValues;

  let products = useMemo(() => searchProductByName(q as string), [q]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">Search</h1>
      <hr className="my-4" />

      <div className="flex flex-col">
        <div className="">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 rounded-md py-2 px-4 mb-2"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-blue-400 py-2 px-4 rounded-md text-white ml-2"
            >
              Search
            </button>
          </form>
        </div>
        <div className="my-4">
          <h4 className="text-2xl font-semibold my-4">Results</h4>

          {q === "" ? (
            <Alert message="Usa el formulario para hacer una búsqueda" alert="alert-success" />
          ) : (
            products.length === 0 && (
              <Alert message={`No hay resultados para: ${q}`} alert="alert-success" />
            )
          )}

          <ProductList products={products} />
        </div>
      </div>
    </>
  )
}
