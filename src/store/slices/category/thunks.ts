import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseHandleError } from "../../../firebase/errors/firebaseHandleError";

import { CategoryModel, CategoryAttributes } from "../../../models";

export interface updatePortfolioProps {
  id: string;
  payload: CategoryAttributes;
}

export const getCategoriesAsync = createAsyncThunk(
  "categories/getCategoriesAsync",
  async (_, { rejectWithValue }) => {
    try {
      const portfolios = await CategoryModel.findAll();
      return portfolios;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const createCategoryAsync = createAsyncThunk(
  "categories/createCategoryAsync",
  async (data: CategoryAttributes, { rejectWithValue }) => {
    try {
      const id = await CategoryModel.create(data);
      return {
        ...data,
        id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const updateCategoryAsync = createAsyncThunk(
  "categories/updateCategoryAsync",
  async (data: updatePortfolioProps, { rejectWithValue }) => {
    try {
      await CategoryModel.update(data.id, data.payload);
      return {
        ...data.payload,
        id: data.id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  "categories/deleteCategoryAsync",
  async (id: string, { rejectWithValue }) => {
    try {
      await CategoryModel.destroy(id);
      return id;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);
