import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    wishlistItem: [],
    loader: false,
  });

  return (
    <WishlistContext.Provider
      value={{ wishlistState: state, wishlistDispatch: dispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
