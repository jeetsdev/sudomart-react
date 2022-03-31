export const filterByRating = (state, data) => {
  return data.filter((product) => product.rating >= Number(state.rating));
};
