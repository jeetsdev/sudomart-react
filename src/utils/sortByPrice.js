export const sortByPrice = (state, data) => {
  switch (state.sortBy) {
    case "LOW_TO_HIGH":
      return [...data].sort((item1, item2) => {
        return item1.price - item2.price;
      });
    case "HIGH_TO_LOW":
      return [...data].sort((item1, item2) => {
        return item2.price - item1.price;
      });
    default:
      return data;
  }
};
