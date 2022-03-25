import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ProductListing } from "../pages/ProductListing/ProductListing";

export const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing/>} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};
