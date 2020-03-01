import { createSelector } from 'reselect';

const selectList = state => state.list;

export const selectListItems = createSelector(
  [selectList],
  list => list.listItems
);