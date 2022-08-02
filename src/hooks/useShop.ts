import { useAppSelector } from "./useAppState";
import { selectAllProducts } from "../store/slices/product";

export const useShop = () => {
  const products = useAppSelector(selectAllProducts);
  const { loading, errorMessage } = useAppSelector((state) => state.products);

  const getProductsListHome = () => {
    const list = products.filter(product => product.visible && product.highlight);
    return list;
  }

  const getProductsList = () => {
    const list = products.filter(product => product.visible);
    return list;
  }

  const getProductsByCategory = (category: string) => {
    const list = products.filter(product =>
      product.visible &&
      product.categories.some(categoryItem => categoryItem.value.toLowerCase().includes(category.toLowerCase())));

    return list;
  }

  const getProductBySlug = (slug: string) => {
    const product = products.find(product =>
      product.visible && product.slug.toLowerCase() === slug.toLowerCase());

    if (!product) return null;

    return product;
  }

  const searchProductByName = (name: string) => {
    const productList = products.filter(product => product.title.toLowerCase().includes(name.toLowerCase()));
    return productList;
  }

  return {
    products,
    loading,
    errorMessage,
    getProductsListHome,
    getProductsList,
    getProductsByCategory,
    getProductBySlug,
    searchProductByName,
  };
}