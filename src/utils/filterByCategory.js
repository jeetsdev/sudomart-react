export const filterByCategory = (state, data) => {
  return data.filter((product) =>
    state.category.includes(product.categoryName.toUpperCase())
  );
};
