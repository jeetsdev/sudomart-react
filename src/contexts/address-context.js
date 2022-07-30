import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { addressReducer } from "../reducer";

// Creating context and custom hook
const AddressContext = createContext();
export const useAddress = () => useContext(AddressContext);

const initialAddress = {
	id: uuid(),
	name: "Ranjeet Singh",
	address: "Dayal residency, Lucknow",
	city: "Lucknow",
	state: "Uttar Pradesh",
	country: "India",
	pincode: "123456",
	mobile: "+919999999999",
};

// Creating provider here
export const AddressProvider = ({ children }) => {
	const [state, dispatch] = useReducer(addressReducer, {
		allAddress: [initialAddress],
		modalAddress: {},
	});

	return (
		<AddressContext.Provider
			value={{ addressState: state, addressDispatch: dispatch }}>
			{children}
		</AddressContext.Provider>
	);
};
