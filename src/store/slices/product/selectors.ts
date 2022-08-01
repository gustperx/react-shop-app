import { RootState } from "../..";
import { productAdapter } from "./productSlice";

export const {
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts,
} = productAdapter.getSelectors((state: RootState) => state.products);
