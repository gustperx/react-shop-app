
import { Cart } from "../../components/shop";
import { useProduct } from "../../hooks";

export const HomePage = () => {

  const { products, loading } = useProduct();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        loading ? "Cargando" : products.map(product => (<Cart key={product.id} product={product} />))
      }
    </div>
  )
}
