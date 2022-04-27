import { ACTION_TYPE } from "../utils";

const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, GET_WISHLIST_ITEM } =
	ACTION_TYPE;

export const wishlistReducer = (state, action) => {
	switch (action.type) {
		case GET_WISHLIST_ITEM:
			return {
				...state,
				wishlistItem: action.payload,
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				wishlistItem: action.payload,
			};
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				wishlistItem: action.payload,
			};
		default:
			break;
	}
};
