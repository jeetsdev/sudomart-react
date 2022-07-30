import { createContext, useContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import toast from "react-hot-toast";
import { ACTION_TYPE } from "../utils";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
	const [state, dispatch] = useReducer(wishlistReducer, {
		wishlistItem: [],
	});

	const {
		authState: { authToken },
	} = useAuth();
	const { GET_WISHLIST_ITEM, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } =
		ACTION_TYPE;

	// Getting initial wishlist items.
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("/api/user/wishlist", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						data: { wishlist },
						status,
					} = res;
					if (status === 200) {
						dispatch({
							type: GET_WISHLIST_ITEM,
							payload: wishlist,
						});
					}
				})();
			} catch (error) {
				toast.error("Some error occured in geetting cart items.");
			}
		}
	}, [authToken, GET_WISHLIST_ITEM]);

	// Add to wishlist handler
	const addToWishlist = async (product) => {
		try {
			const res = await axios.post(
				"/api/user/wishlist",
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
				data: { wishlist },
				status,
			} = res;
			if (status === 201) {
				toast.success("Added to wishlist.");
				dispatch({
					type: ADD_TO_WISHLIST,
					payload: wishlist,
				});
			}
		} catch (error) {
			toast.error("some error occured in adding to wishlist.");
		}
	};

	// remove from  wishlist handler
	const removeFromWishlist = async (product) => {
		try {
			const res = await axios.delete(
				`/api/user/wishlist/${product._id}`,
				{
					headers: {
						authorization: authToken,
					},
				},
			);
			const {
				data: { wishlist },
				status,
			} = res;
			if (status === 200) {
				toast.success("Removed from wishlist.", {
					icon: `⚠️`,
				});
				dispatch({
					type: REMOVE_FROM_WISHLIST,
					payload: wishlist,
				});
			}
		} catch (error) {
			toast.error("some error occured in Removing from wishlist.", {
				icon: `⚠️`,
			});
		}
	};

	return (
		<WishlistContext.Provider
			value={{
				wishlistState: state,
				wishlistDispatch: dispatch,
				addToWishlist,
				removeFromWishlist,
			}}>
			{children}
		</WishlistContext.Provider>
	);
};
