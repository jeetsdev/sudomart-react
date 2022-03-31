import { ACTION_TYPE } from "../utils/index"

export const filterReducer = (state, action) => {
  const { PRICE_RANGE, CATEGORIES, RATING, SORT_BY_PRICE, CLEAR_ALL } =
    ACTION_TYPE;
  switch (action.type) {
    case PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case CATEGORIES:
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((cat) => cat !== action.payload)
          : [...state.category, action.payload],
      };
    case RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        sortBy: action.payload,
      };
    case CLEAR_ALL:
      return {
        sortBy: "",
        category: [],
        rating: 1,
        priceRange: 1000,
      };

    default:
      return state;
  }
};
