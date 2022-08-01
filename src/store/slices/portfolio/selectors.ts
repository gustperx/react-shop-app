import { RootState } from "../../";
import { portfolioAdapter } from "./portfolioSlice";

export const {
  selectById: selectPortfolioById,
  selectIds: selectPortfolioIds,
  selectEntities: selectPortfolioEntities,
  selectAll: selectAllPortfolios,
  selectTotal: selectTotalPortfolios,
} = portfolioAdapter.getSelectors((state: RootState) => state.portfolios);
