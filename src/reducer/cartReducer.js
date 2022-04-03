import { ACTION_TYPE } from "../utils";

const { ADD_TO_CART, INCREASE_ITEM_QTY, DECREASE_ITEM_QTY, REMOVE_FROM_CART } =
  ACTION_TYPE;
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItem: [...state.cartItem, { ...action.payload, inCartQty: 1 }],
      };
    case INCREASE_ITEM_QTY: {
      return {
        ...state,
        cartItem: state.cartItem.filter((item) =>
          item._id === action.payload.id
            ? (item.inCartQty = action.payload.qty + 1)
            : item.inCartQty
        ),
      };
    }
    case DECREASE_ITEM_QTY: {
      return {
        ...state,
        cartItem: state.cartItem.filter((item) =>
          item._id === action.payload.id
            ? (item.inCartQty = action.payload.qty - 1)
            : item
        ),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItem: state.cartItem.filter((item) =>
          item._id !== action.payload
        ),
      };
    }
    default:
      break;
  }
};
