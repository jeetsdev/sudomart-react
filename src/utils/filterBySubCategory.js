export const filterBySubCategory = (state, data) => {
  return data.filter((product) =>
    state.subCategory.includes(product.subCategoryName.toUpperCase())
  );
};
