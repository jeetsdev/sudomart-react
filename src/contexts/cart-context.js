import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItem: [],
    loader: false,
    totalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
