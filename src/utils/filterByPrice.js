export const filterByPrice = (state, data) => {
  return data.filter((product) => product.price <= Number(state.priceRange));
};
