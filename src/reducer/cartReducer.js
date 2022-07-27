import { ACTION_TYPE } from "../utils";

const {
	ADD_TO_CART,
	GET_CART_ITEMS,
	INCREASE_ITEM_QTY,
	DECREASE_ITEM_QTY,
	REMOVE_FROM_CART,
	CLEAR_CART,
} = ACTION_TYPE;

export const cartReducer = (state, action) => {
	switch (action.type) {
		case GET_CART_ITEMS:
			return {
				...state,
				cartItem: action.payload,
			};
		case ADD_TO_CART:
			return {
				...state,
				cartItem: action.payload,
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItem: action.payload,
			};
		case INCREASE_ITEM_QTY:
			return {
				...state,
				cartItem: action.payload,
			};
		case DECREASE_ITEM_QTY:
			return {
				...state,
				cartItem: action.payload,
			};
		case CLEAR_CART:
			return {
				...state,
				cartItem: action.payload,
			};
		default:
			break;
	}
};
