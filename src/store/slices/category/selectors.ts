import { RootState } from "../..";
import { categoryAdapter } from "./categorySlice";

export const {
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = categoryAdapter.getSelectors((state: RootState) => state.categories);
