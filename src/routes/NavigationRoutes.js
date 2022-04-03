import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Cart, Home, ProductListing, Error } from "../pages";

export const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};
