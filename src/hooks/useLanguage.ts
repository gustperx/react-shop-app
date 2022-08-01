import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useAppDispatch, useAppSelector } from "./useAppState";
import {
  createLanguageAsync,
  deleteLanguageAsync,
  getLanguagesAsync,
  selectAllLanguage,
  selectLanguageEntities,
  updateLanguageAsync,
} from "../store/slices/language";
import { LanguageAttributes } from "../models";

export const useLanguage = () => {
  const dispatch = useAppDispatch();
  const languages = useAppSelector(selectAllLanguage);
  const languagesEntity = useAppSelector(selectLanguageEntities);
  const { loading, errorMessage } = useAppSelector((state) => state.languages);

  const getLanguageById = (id: string) => {
    return languagesEntity[id];
  };

  const getLanguages = () => {
    dispatch(getLanguagesAsync());
  };

  const createLanguage = async (data: LanguageAttributes) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(createLanguageAsync(data));
    Swal.hideLoading();
    Swal.close();
  };

  const updateLanguage = async (
    languageId: string,
    data: LanguageAttributes
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(
      updateLanguageAsync({
        id: languageId,
        payload: data,
      })
    );
    Swal.hideLoading();
    Swal.close();
  };

  const deleteLanguage = async (id: string) => {
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
      await dispatch(deleteLanguageAsync(id));
      Swal.hideLoading();
      Swal.close();
    }
  };

  return {
    languages,
    getLanguageById,
    getLanguages,
    createLanguage,
    updateLanguage,
    deleteLanguage,
    loading,
    errorMessage,
  };
};
