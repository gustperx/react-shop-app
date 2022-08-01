import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseHandleError } from "../../../firebase/errors/firebaseHandleError";

import { ProductModel, ProductAttributes } from "../../../models";

export interface updatePortfolioProps {
  id: string;
  payload: ProductAttributes;
}

export const getProductsAsync = createAsyncThunk(
  "products/getPortfoliosAsync",
  async (_, { rejectWithValue }) => {
    try {
      const portfolios = await ProductModel.findAll();
      return portfolios;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const createProductAsync = createAsyncThunk(
  "products/createProrductAsync",
  async (data: ProductAttributes, { rejectWithValue }) => {
    try {
      const id = await ProductModel.create(data);
      return {
        ...data,
        id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const updateProductAsync = createAsyncThunk(
  "products/updateProrductAsync",
  async (data: updatePortfolioProps, { rejectWithValue }) => {
    try {
      await ProductModel.update(data.id, data.payload);
      return {
        ...data.payload,
        id: data.id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProrductAsync",
  async (id: string, { rejectWithValue }) => {
    try {
      await ProductModel.destroy(id);
      return id;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);
