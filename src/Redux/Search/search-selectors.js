import { createSelector } from "reselect";

const selectSearch = state => state.search;

export const selectSearchData = createSelector(
  [selectSearch],
  search => search.searchData ? search.searchData : []
);

export const selectImageData = createSelector(
  [selectSearch],
  search => search.imageData
);

export const selectIsImageDataLoaded = createSelector(
  [selectImageData],
  imageData => !!imageData
);

export const selectIsSearchDataFetching = createSelector(
  [selectSearch],
  search => search.isFetching
);

export const selectSearchValue = createSelector(
  [selectSearch],
  search => search.searchValue
);