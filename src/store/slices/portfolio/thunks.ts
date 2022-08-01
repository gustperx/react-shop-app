import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseHandleError } from "../../../firebase/errors/firebaseHandleError";

import { PortfolioModel, PortfolioAttributes } from "../../../models";

export interface updatePortfolioProps {
  id: string;
  payload: PortfolioAttributes;
}

export const getPortfoliosAsync = createAsyncThunk(
  "portfolios/getPortfoliosAsync",
  async (_, { rejectWithValue }) => {
    try {
      const portfolios = await PortfolioModel.findAll();
      return portfolios;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const createPortfolioAsync = createAsyncThunk(
  "portfolios/createPortfolioAsync",
  async (data: PortfolioAttributes, { rejectWithValue }) => {
    try {
      const id = await PortfolioModel.create(data);
      return {
        ...data,
        id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const updatePortfolioAsync = createAsyncThunk(
  "portfolios/updatePortfolioAsync",
  async (data: updatePortfolioProps, { rejectWithValue }) => {
    try {
      await PortfolioModel.update(data.id, data.payload);
      return {
        ...data.payload,
        id: data.id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const deletePortfolioAsync = createAsyncThunk(
  "portfolios/deletePortfolioAsync",
  async (id: string, { rejectWithValue }) => {
    try {
      await PortfolioModel.destroy(id);
      return id;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);
