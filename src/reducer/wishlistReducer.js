import { ACTION_TYPE } from "../utils";

const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = ACTION_TYPE;

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItem: [...state.wishlistItem, {...action.payload,inCartQty:1}],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItem: state.wishlistItem.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      break;
  }
};
