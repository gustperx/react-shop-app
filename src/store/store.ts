import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { categorySlice } from "./slices/category";
import { productSlice } from "./slices/product";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productSlice.reducer,
    categories: categorySlice.reducer,
  },
});
