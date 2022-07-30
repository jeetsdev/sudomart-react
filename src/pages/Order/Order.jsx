import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./Order.css";

export const Order = () => {
	const {
		cartState: { orderDetails },
	} = useCart();

	return (
		<main className="order__wrapper center__flex ">
			<div className="order__sec border__rad-4px card__shadow padding-1rem margin-1rem">
				<h2 className="center__flex h4">
					Order Placed Successfully{" "}
					<span className="center__flex margin__lr-8px">
						<BsFillCheckCircleFill />
					</span>
				</h2>
				<div className="order__sec-details margin-1rem">
					<p>
						Payment ID :{" "}
						<span className="margin__lr-8px">
							{" "}
							{orderDetails?.paymentID}
						</span>
					</p>
					<p>
						Amount :{" "}
						<span className="margin__lr-8px">
							{" "}
							{orderDetails?.amount}
						</span>
					</p>
					<p>
						Quantity :{" "}
						<span className="margin__lr-8px">
							{" "}
							{orderDetails?.quantity}
						</span>
					</p>
					<div className="order__sec-address">
						<h3 className="margin__tb-8px">Delivering To :</h3>
						<p className="text-mid text-pri ">
							{orderDetails.address?.name}
						</p>
						<p className="txt-sml">
							{orderDetails.address?.address}
						</p>
						<p className="txt-sml">
							{orderDetails.address?.city}
							{orderDetails.address?.state}
							{orderDetails.address?.country}
							{orderDetails.address?.pincode}
						</p>
						<p className="txt-sml">
							Mob: {orderDetails.address?.mobile}
						</p>
					</div>
				</div>
				<Link
					to="/products"
					className="btns btn__primary border__rad-4px center__flex">
					Go to Shop
				</Link>
			</div>
		</main>
	);
};
