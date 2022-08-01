import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { languageSlice } from "./slices/language";
import { portfolioSlice } from "./slices/portfolio";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    portfolios: portfolioSlice.reducer,
    languages: languageSlice.reducer,
  },
});
