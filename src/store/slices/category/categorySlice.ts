import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { CategoryItem } from "../../../models";
import {
  createCategoryAsync,
  deleteCategoryAsync,
  getCategoriesAsync,
  updateCategoryAsync,
} from "./thunks";

export const categoryAdapter = createEntityAdapter<CategoryItem>();

const initialState = categoryAdapter.getInitialState({
  loading: false,
  errorMessage: "",
});

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All
      .addCase(getCategoriesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCategoriesAsync.fulfilled,
        (state, action: PayloadAction<CategoryItem[]>) => {
          state.loading = false;
          categoryAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string;
      })
      // Create
      .addCase(createCategoryAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        categoryAdapter.addOne(state, action.payload);
      })
      .addCase(createCategoryAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Update
      .addCase(updateCategoryAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        categoryAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateCategoryAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Delete
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        categoryAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteCategoryAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      });
  },
});

export const { clearErrorMessage } = categorySlice.actions;
