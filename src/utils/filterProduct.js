import {
  sortByPrice,
  filterByPrice,
  filterByCategory,
  filterByRating,
} from "./index";

export const filterProduct = (state, productData) => {
  if (state.priceRange !== 1000) {
    productData = filterByPrice(state, productData);
  }

  if (state.category.length) {
    productData = filterByCategory(state, productData);
  }

  if (state.sortBy !== "") {
    productData = sortByPrice(state, productData);
  }
  if (state.rating !== 1) {
    productData = filterByRating(state, productData);
  }
  return productData;
};
