import { FC } from "react"
import { ProductItem } from "../../models"

interface Props {
  product: ProductItem
}

export const Cart: FC<Props> = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image_one} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          { product.title }
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
          {
            product.categories.map(category => (
              <div className="badge badge-outline" key={category.label}>{category.value}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
