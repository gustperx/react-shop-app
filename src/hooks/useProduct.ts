import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useAppDispatch, useAppSelector } from "./useAppState";
import {
  createProductAsync,
  deleteProductAsync,
  getProductsAsync,
  selectAllProducts,
  selectProductEntities,
  updateProductAsync,
} from "../store/slices/product";
import { ProductAttributes } from "../models";

export const usePortfolio = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const portfoliosEntity = useAppSelector(selectProductEntities);
  const { loading, errorMessage } = useAppSelector((state) => state.products);

  const getProductById = (id: string) => {
    return portfoliosEntity[id];
  };

  const getProducts = () => {
    dispatch(getProductsAsync());
  };

  const createProduct = async (data: ProductAttributes) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(createProductAsync(data));
    Swal.hideLoading();
    Swal.close();
  };

  const updateProduct = async (
    portfolioId: string,
    data: ProductAttributes
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(
      updateProductAsync({
        id: portfolioId,
        payload: data,
      })
    );
    Swal.hideLoading();
    Swal.close();
  };

  const deleteProduct = async (id: string) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Está seguro?",
      text: "Una vez borrado, no se puede recuperar",
      showDenyButton: true,
      confirmButtonText: "Si, estoy seguro",
    });

    if (isConfirmed) {
      Swal.fire({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      await dispatch(deleteProductAsync(id));
      Swal.hideLoading();
      Swal.close();
    }
  };

  return {
    products,
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    loading,
    errorMessage,
  };
};
