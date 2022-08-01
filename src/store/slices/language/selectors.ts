import { RootState } from "../..";
import { languageAdapter } from "./languageSlice";

export const {
  selectById: selectLanguageById,
  selectIds: selectLanguageIds,
  selectEntities: selectLanguageEntities,
  selectAll: selectAllLanguage,
  selectTotal: selectTotalLanguage,
} = languageAdapter.getSelectors((state: RootState) => state.languages);
