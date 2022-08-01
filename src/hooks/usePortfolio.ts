import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useAppDispatch, useAppSelector } from "./useAppState";
import {
  createPortfolioAsync,
  deletePortfolioAsync,
  getPortfoliosAsync,
  selectAllPortfolios,
  selectPortfolioEntities,
  updatePortfolioAsync,
} from "../store/slices/portfolio";
import { PortfolioAttributes } from "../models";

export const usePortfolio = () => {
  const dispatch = useAppDispatch();
  const portfolios = useAppSelector(selectAllPortfolios);
  const portfoliosEntity = useAppSelector(selectPortfolioEntities);
  const { loading, errorMessage } = useAppSelector((state) => state.portfolios);

  const getPortfolioById = (id: string) => {
    return portfoliosEntity[id];
  };

  const getPortfolios = () => {
    dispatch(getPortfoliosAsync());
  };

  const createPortfolio = async (data: PortfolioAttributes) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(createPortfolioAsync(data));
    Swal.hideLoading();
    Swal.close();
  };

  const updatePortfolio = async (
    portfolioId: string,
    data: PortfolioAttributes
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(
      updatePortfolioAsync({
        id: portfolioId,
        payload: data,
      })
    );
    Swal.hideLoading();
    Swal.close();
  };

  const deletePortfolio = async (id: string) => {
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
      await dispatch(deletePortfolioAsync(id));
      Swal.hideLoading();
      Swal.close();
    }
  };

  return {
    portfolios,
    getPortfolioById,
    getPortfolios,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    loading,
    errorMessage,
  };
};
