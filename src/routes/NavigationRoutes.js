import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../components";
import {
	Cart,
	Home,
	ProductListing,
	Error,
	Wishlist,
	Login,
	SignUp,
	User,
} from "../pages";

export const NavigationRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<Error />} />
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/products" element={<ProductListing />} />
			<Route path="/mockman" element={<Mockman />} />

			{/* Private paths */}
			<Route element={<RequireAuth />}>
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/user" element={<User />} />
			</Route>
		</Routes>
	);
};
