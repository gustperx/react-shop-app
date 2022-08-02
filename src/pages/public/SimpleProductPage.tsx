import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import ReactMarkdown from 'react-markdown'

import { useShop } from "../../hooks";

export const SimpleProductPage = () => {

  const { getProductBySlug } = useShop()

  const { slug = "" } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <img src={product.image_one} alt={product.title} width={500} height={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <ReactMarkdown>{product.description.text}</ReactMarkdown>
          <div>
            {
              product.categories.map(category => (
                <div className="badge badge-outline mr-2" key={category.label}>{category.value}</div>
              ))
            }
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </>
  )
}
