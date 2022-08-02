import { Link } from "react-router-dom";
import { useCategory } from "../../hooks";

export const CategoryList = () => {

  const { categories } = useCategory();

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      {
        categories.map(category => (
          <Link key={category.id} to={`/category/${category.name.toLowerCase()}`}>
            <div
              className="flex justify-center items-center text-lg font-semibold bg-blue-100 rounded-lg py-2"
            >
              {category.name}
            </div>
          </Link>
        ))
      }
    </div>
  )
}
