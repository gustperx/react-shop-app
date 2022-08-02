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
import { uploadImage } from "../helpers";

export const useProduct = () => {
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

  const createProduct = async (data: ProductAttributes, files: string[]) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    // Upload files
    const [file_one, file_two, file_three] = await uploadFiles(files)
    data.image_one = file_one;
    data.image_two = file_two;
    data.image_three = file_three;

    // Create product
    await dispatch(createProductAsync(data));
    Swal.hideLoading();
    Swal.close();
  };

  const updateProduct = async (
    productId: string,
    data: ProductAttributes,
    files: string[]
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    const currentProduct = getProductById(productId)

    // Upload files
    const [file_one, file_two, file_three] = await uploadFiles(files)
    data.image_one = file_one ? file_one : currentProduct!.image_one;
    data.image_two = file_two ? file_two : currentProduct!.image_two;
    data.image_three = file_three ? file_three : currentProduct!.image_three;

    await dispatch(
      updateProductAsync({
        id: productId,
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

  const uploadFiles = async (files: string[]) => {
    const [file_one, file_two, file_three] = await Promise.all([
      uploadImage(files[0]),
      uploadImage(files[1]),
      uploadImage(files[2]),
    ]);

    return [file_one, file_two, file_three]
  }

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
