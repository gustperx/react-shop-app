import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseHandleError } from "../../../firebase/errors/firebaseHandleError";

import { LanguageModel, LanguageAttributes } from "../../../models";

export interface updatePortfolioProps {
  id: string;
  payload: LanguageAttributes;
}

export const getLanguagesAsync = createAsyncThunk(
  "languages/getLanguagesAsync",
  async (_, { rejectWithValue }) => {
    try {
      const portfolios = await LanguageModel.findAll();
      return portfolios;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const createLanguageAsync = createAsyncThunk(
  "languages/createLanguageAsync",
  async (data: LanguageAttributes, { rejectWithValue }) => {
    try {
      const id = await LanguageModel.create(data);
      return {
        ...data,
        id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const updateLanguageAsync = createAsyncThunk(
  "languages/updateLanguageAsync",
  async (data: updatePortfolioProps, { rejectWithValue }) => {
    try {
      await LanguageModel.update(data.id, data.payload);
      return {
        ...data.payload,
        id: data.id,
      };
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);

export const deleteLanguageAsync = createAsyncThunk(
  "languages/deleteLanguageAsync",
  async (id: string, { rejectWithValue }) => {
    try {
      await LanguageModel.destroy(id);
      return id;
    } catch (error: unknown) {
      return rejectWithValue(firebaseHandleError(error));
    }
  }
);
