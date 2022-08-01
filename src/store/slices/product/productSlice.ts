import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { ProductItem } from "../../../models";
import {
  createProductAsync,
  deleteProductAsync,
  getProductsAsync,
  updateProductAsync,
} from "./thunks";

export const productAdapter = createEntityAdapter<ProductItem>();

const initialState = productAdapter.getInitialState({
  loading: false,
  errorMessage: "",
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All
      .addCase(getProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProductsAsync.fulfilled,
        (state, action: PayloadAction<ProductItem[]>) => {
          state.loading = false;
          productAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string;
      })
      // Create
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        productAdapter.addOne(state, action.payload);
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Update
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        productAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Delete
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        productAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      });
  },
});

export const { clearErrorMessage } = productSlice.actions;
