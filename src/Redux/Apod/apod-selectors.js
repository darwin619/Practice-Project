import { createSelector } from "reselect";

const selectApod = state => state.apod;

export const selectApodData = createSelector(
  [selectApod],
  apod => apod.apodData
);

export const selectIsApodFetching = createSelector(
  [selectApod],
  apod => apod.isFetching
)

export const selectIsApodLoaded = createSelector(
  [selectApod],
  apod => !!apod.apodData
)