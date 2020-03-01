export const addItemToList = (listItems, item) => {
  const existingItem = listItems.find(
    listItem => listItem.data[0].nasa_id === item.data[0].nasa_id
  );

  if (existingItem) return listItems;
  else {
    return [...listItems, { ...item }];
  }
};

export const removeItemFromList = (listItems, item) => {
  const items = listItems.filter(
    listItem => listItem.data[0].nasa_id !== item.data[0].nasa_id
  );
  return items;
};
