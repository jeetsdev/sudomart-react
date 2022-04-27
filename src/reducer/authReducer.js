import { ACTION_TYPE } from "../utils/actionTypes";
const { SET_ERROR, USER_LOGIN, USER_LOGOUT, USER_SIGNUP } = ACTION_TYPE;

export const authReducer = (state, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, error: action.payload };
		case USER_LOGIN:
			return {
				...state,
				userName: action.payload?.userName,
				authToken: action.payload?.authToken,
			};
		case USER_LOGOUT:
			return {
				...state,
				userName: "",
				authToken: "",
			};
		case USER_SIGNUP:
			return {
				...state,
				userName: action.payload?.userName,
				authToken: action.payload?.authToken,
			};
		default:
			return state;
	}
};