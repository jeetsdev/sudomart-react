import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart, useAuth } from "../contexts";
import { ACTION_TYPE } from "../utils";

export const usePayment = () => {
	const navigate = useNavigate();
	const { clearCart, cartDispatch } = useCart();
	const {
		authState: { userName, email },
	} = useAuth();
	const { SET_ORDER_DETAILS } = ACTION_TYPE;

	// Loading script here
	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	// Display razorpay
	const displayRazorpay = async ({ amount, quantity }) => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js",
		);
		if (!res) {
			toast.error("Internet connection required.");
			return;
		}
		const options = {
			key: "rzp_test_N2YUHgmlIDZOna",
			amount: Number(amount) * 100,
			currency: "INR",
			name: "Sudo Mart",
			description: "You are one step closer to get your products...",
			image: `https://raw.githubusercontent.com/jeetsdev/sudomart-react/dev-temp/public/favicon.ico`,
			handler: async function (response) {
				if (response?.razorpay_payment_id) {
					toast.success("Order placed successfully.");
					cartDispatch({
						type: SET_ORDER_DETAILS,
						payload: {
							amount: amount,
							quantity: quantity,
							paymentID: response?.razorpay_payment_id,
						},
					});
					navigate(`/order/${response?.razorpay_payment_id}`, {
						replace: true,
					});
					clearCart();
				}
			},
			prefill: {
				name: userName,
				email: email,
				contact: 9999999999,
			},
			theme: {
				color: "#2F3841",
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return { displayRazorpay };
};
