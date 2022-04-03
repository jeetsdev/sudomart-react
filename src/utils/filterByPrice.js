export const filterByPrice = (state, data) => {
  return data.filter(
    (product) =>
      product.price * product.discountPrecentage/100 <= Number(state.priceRange)
  );
};
