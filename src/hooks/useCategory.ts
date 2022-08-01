import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useAppDispatch, useAppSelector } from "./useAppState";
import {
  createCategoryAsync,
  deleteCategoryAsync,
  getCategoriesAsync,
  selectAllCategories,
  selectCategoryEntities,
  updateCategoryAsync,
} from "../store/slices/category";
import { CategoryAttributes } from "../models";

export const useCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectAllCategories);
  const languagesEntity = useAppSelector(selectCategoryEntities);
  const { loading, errorMessage } = useAppSelector((state) => state.categories);

  const getCategoryById = (id: string) => {
    return languagesEntity[id];
  };

  const getCategories = () => {
    dispatch(getCategoriesAsync());
  };

  const createCategory = async (data: CategoryAttributes) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(createCategoryAsync(data));
    Swal.hideLoading();
    Swal.close();
  };

  const updateCategory = async (
    languageId: string,
    data: CategoryAttributes
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(
      updateCategoryAsync({
        id: languageId,
        payload: data,
      })
    );
    Swal.hideLoading();
    Swal.close();
  };

  const deleteCategory = async (id: string) => {
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
      await dispatch(deleteCategoryAsync(id));
      Swal.hideLoading();
      Swal.close();
    }
  };

  return {
    categories: categories,
    getCategoryById: getCategoryById,
    getCategories: getCategories,
    createCategory: createCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,
    loading,
    errorMessage,
  };
};
