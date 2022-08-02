import { FC } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../../models";
import { Cart } from "./Cart";

interface Props {
  products: ProductItem[]
}

export const ProductList: FC<Props> = ({products}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        products.map(product => (
          <Link key={product.id} to={`/product/${product.slug.toLowerCase()}`}>
            <Cart product={product} />
          </Link>
        ))
      }
    </div>
  )
}
