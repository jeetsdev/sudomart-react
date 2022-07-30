import { ACTION_TYPE } from "../utils";

const { ADD_ADDRESS, ADD_MODAL_ADDRESS, EDIT_ADDRESS } = ACTION_TYPE;
export const addressReducer = (state, action) => {
	switch (action.type) {
		case ADD_ADDRESS:
			return {
				...state,
				allAddress: [...state.allAddress, action.payload],
			};
		case ADD_MODAL_ADDRESS:
			return {
				...state,
				modalAddress: action.payload,
			};
		case EDIT_ADDRESS:
			return {
				...state,
				// updating matched address
				allAddress: state.allAddress.map((address) => {
					return address.id === action.payload.id
						? action.payload
						: address;
				}),
			};
		default:
			return state;
	}
};
