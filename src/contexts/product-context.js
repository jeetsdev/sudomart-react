import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProductContext = createContext(null);
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
	const [productData, setProductData] = useState([]);

	// Getting initial products here
	useEffect(() => {
		try {
			(async () => {
				const res = await axios.get("/api/products");
				setProductData(res?.data.products);
			})();
		} catch (error) {
			toast.error("Some error occured.");
		}
	}, []);

	return (
		<ProductContext.Provider value={{ productData }}>
			{children}
		</ProductContext.Provider>
	);
};
