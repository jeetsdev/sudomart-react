import { Addresscard, CheckoutCard, NewAddressModal } from "../../components";
import { useAddress, useCart } from "../../contexts";
import "./Checkout.css";
import { useState } from "react";

export const Checkout = () => {
	const {
		addressState: { allAddress },
	} = useAddress();
	const {
		cartState: { cartItem },
	} = useCart();
	const [modalFlag, setModalFlag] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState(allAddress[0]);

	return (
		<>
			<h2 className="headline-2 main__title margin-1rem center__flex">
				Checkout
			</h2>
			{modalFlag && <NewAddressModal setModalFlag={setModalFlag} />}
			<main className="checkout__site-wrapper grid grid__col-70-30 padding-1rem">
				<div>
					<div className="checkout__address-sec center__flex flex__wrap">
						{/* Address cards */}
						{allAddress.map((address) => {
							return (
								<div
									className="address__card padding-1rem border__rad-4px"
									key={address.id}>
									<input
										type="checkbox"
										id={address.id}
										name="select"
										checked={
											selectedAddress?.id === address?.id
										}
										onChange={() =>
											setSelectedAddress(address)
										}
									/>
									<label
										htmlFor={address.id}
										className="margin__lr-4px">
										Deliver Here
									</label>
									<Addresscard
										address={address}
										setModalFlag={setModalFlag}
									/>
								</div>
							);
						})}
					</div>

					{/* New address */}
					<button
						onClick={() => setModalFlag((prev) => !prev)}
						className="btns btn__primary border__rad-4px margin-1rem">
						Add New Address
					</button>
				</div>

				{/* Checkout card */}
				<div className="checkout__card-sec">
					{cartItem.length !== 0 && (
						<CheckoutCard selectedAddress={selectedAddress} />
					)}
				</div>
			</main>
		</>
	);
};
