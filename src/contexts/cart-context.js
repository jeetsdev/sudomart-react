import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ACTION_TYPE } from "../utils";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		cartItem: [],
		loader: false,
	});

	const {
		authState: { authToken },
	} = useAuth();
	const {
		GET_CART_ITEMS,
		ADD_TO_CART,
		REMOVE_FROM_CART,
		INCREASE_ITEM_QTY,
		DECREASE_ITEM_QTY,
		CLEAR_CART,
	} = ACTION_TYPE;

	// Getting initial cart items.
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("api/user/cart", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						data: { cart },
						status,
					} = res;
					if (status === 200) {
						dispatch({
							type: GET_CART_ITEMS,
							payload: cart,
						});
					}
				})();
			} catch (error) {
				toast.error("Some error occured in geetting cart items.");
			}
		}
	}, [authToken, GET_CART_ITEMS]);

	// Add to cart handler here
	const addToCart = async (product) => {
		try {
			const res = await axios.post(
				"/api/user/cart",
				{
					product: product,
				},
				{
					headers: {
						authorization: authToken,
					},
				},
			);
			const {
				data: { cart },
				status,
			} = res;
			if (status === 201) {
				toast.success("Added to cart");
				dispatch({
					type: ADD_TO_CART,
					payload: cart,
				});
			}
		} catch (error) {
			toast.error("some error occured in adding to cart.");
		}
	};

	// Remove from cart handler
	const removeFromCart = async (product) => {
		try {
			const res = await axios.delete(`/api/user/cart/${product._id}`, {
				headers: {
					authorization: authToken,
				},
			});
			const {
				data: { cart },
				status,
			} = res;

			if (status === 200) {
				toast.success("Removed from cart", {
					icon: "⚠️",
				});
				dispatch({
					type: REMOVE_FROM_CART,
					payload: cart,
				});
			}
		} catch (error) {
			toast.error("some error occured in Removing from cart.");
		}
	};

	// Increase quantity handler here
	const increaseQuantity = async (product) => {
		try {
			const res = await axios.post(
				`/api/user/cart/${product._id}`,
				{
					action: {
						type: "increment",
					},
				},
				{
					headers: {
						authorization: authToken,
					},
				},
			);
			const {
				data: { cart },
				status,
			} = res;

			if (status === 200) {
				toast.success(`quantity Increased`);
				dispatch({
					type: INCREASE_ITEM_QTY,
					payload: cart,
				});
			}
		} catch (error) {
			toast.error("some error occured in increasing quantity.");
		}
	};

	// Decrease quantity handler here
	const decreaseQuantity = async (product) => {
		try {
			const res = await axios.post(
				`/api/user/cart/${product._id}`,
				{
					action: {
						type: "decrement",
					},
				},
				{
					headers: {
						authorization: authToken,
					},
				},
			);
			const {
				data: { cart },
				status,
			} = res;

			if (status === 200) {
				toast.success("quantity Decreased", {
					icon: "⚠️",
				});
				dispatch({
					type: DECREASE_ITEM_QTY,
					payload: cart,
				});
			}
		} catch (error) {
			toast.error("some error occured in increasing quantity.");
		}
	};

	// Clearing cart here (custom api)
	const clearCart = async () => {
		try {
			const res = await axios.post(
				`/api/user/cart/clearCart`,
				{},
				{
					headers: {
						authorization: authToken,
					},
				},
			);
			const {
				data: { cart },
			} = res;
			dispatch({ type: CLEAR_CART, payload: cart });
		} catch (error) {
			toast.error("Error occuerd in clearing cart.");
		}
	};

	return (
		<CartContext.Provider
			value={{
				cartState: state,
				cartDispatch: dispatch,
				addToCart,
				removeFromCart,
				increaseQuantity,
				decreaseQuantity,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};
