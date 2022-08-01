import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { PortfolioItem } from "../../../models";
import {
  createPortfolioAsync,
  deletePortfolioAsync,
  getPortfoliosAsync,
  updatePortfolioAsync,
} from "./thunks";

export const portfolioAdapter = createEntityAdapter<PortfolioItem>();

const initialState = portfolioAdapter.getInitialState({
  loading: false,
  errorMessage: "",
});

export const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All
      .addCase(getPortfoliosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPortfoliosAsync.fulfilled,
        (state, action: PayloadAction<PortfolioItem[]>) => {
          state.loading = false;
          portfolioAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getPortfoliosAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string;
      })
      // Create
      .addCase(createPortfolioAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        portfolioAdapter.addOne(state, action.payload);
      })
      .addCase(createPortfolioAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Update
      .addCase(updatePortfolioAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        portfolioAdapter.upsertOne(state, action.payload);
      })
      .addCase(updatePortfolioAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Delete
      .addCase(deletePortfolioAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        portfolioAdapter.removeOne(state, action.payload);
      })
      .addCase(deletePortfolioAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      });
  },
});

export const { clearErrorMessage } = portfolioSlice.actions;
