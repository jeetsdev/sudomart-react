import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { useAddress } from "../../contexts";
import { ACTION_TYPE } from "../../utils";

export const NewAddressModal = ({ setModalFlag }) => {
	const { addressDispatch } = useAddress();
	const {
		addressState: { modalAddress, allAddress },
	} = useAddress();
	const { ADD_ADDRESS, ADD_MODAL_ADDRESS, EDIT_ADDRESS } = ACTION_TYPE;

	// Initial data in modal address present then edit the data
	const [formData, setFormData] = useState({
		id: modalAddress?.id ?? uuid(),
		name: modalAddress?.name ?? "",
		address: modalAddress?.address ?? "",
		city: modalAddress?.city ?? "",
		state: modalAddress?.state ?? "",
		country: modalAddress?.country ?? "",
		pincode: modalAddress?.pincode ?? "",
		mobile: modalAddress?.mobile ?? "",
	});

	const isAddressPresent = allAddress.some(
		(address) => address.id === formData.id,
	);
	const formSumbitHandler = (event) => {
		event.preventDefault();
		// Edit address here
		if (isAddressPresent) {
			addressDispatch({ type: EDIT_ADDRESS, payload: formData });
			toast.success("Address edited successfully.");
		}
		// Add address here
		else {
			addressDispatch({ type: ADD_ADDRESS, payload: formData });
			toast.success("Address added successfully.");
		}
		setModalFlag((prev) => !prev);
	};

	//! Common function for all input changes
	const inputChangeHandler = (event) => {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	};

	const dummyData = {
		id: uuid(),
		name: "Mr. Night",
		address: "Wayne tower",
		city: "Gotham city",
		state: "DC",
		country: "Dark World",
		pincode: "000000",
		mobile: "0000000000",
	};
	const dummyDataHandler = () => {
		setFormData(dummyData);
	};

	//! After getting data clearing modal data
	useEffect(() => {
		addressDispatch({ type: ADD_MODAL_ADDRESS, payload: {} });
	}, [addressDispatch, ADD_MODAL_ADDRESS]);

	return (
		<div
			className="center__flex new-address-sec"
			onClick={(event) => setModalFlag((prev) => !prev)}>
			<form
				action=""
				className="address__form center__flex flex__dir-col"
				onSubmit={(event) => formSumbitHandler(event)}
				onClick={(event) => event.stopPropagation()}>
				<h4 className="h4">
					{isAddressPresent ? "Edit" : "Add new"} Address
				</h4>
				<input
					type="text"
					placeholder="Name"
					value={formData?.name}
					name="name"
					onChange={inputChangeHandler}
					required
				/>
				<input
					type="text"
					placeholder="House no, Road, Colony..."
					value={formData?.address}
					name="address"
					onChange={inputChangeHandler}
					required
				/>
				<input
					type="text"
					placeholder="City"
					value={formData?.city}
					name="city"
					onChange={inputChangeHandler}
					required
				/>
				<input
					type="text"
					placeholder="State"
					value={formData?.state}
					name="state"
					onChange={inputChangeHandler}
					required
				/>
				<input
					type="text"
					placeholder="Country"
					value={formData?.country}
					name="country"
					onChange={inputChangeHandler}
					required
				/>
				<input
					type="text"
					placeholder="Postal Code"
					value={formData?.pincode}
					name="pincode"
					onChange={inputChangeHandler}
					required
				/>
				<input
					type="text"
					placeholder="Mobile Number"
					value={formData?.mobile}
					name="mobile"
					onChange={inputChangeHandler}
					required
				/>
				<div className="address__btns">
					<button
						type="submit"
						className="btns btn__primary border__rad-4px">
						Save
					</button>
					<button
						type="button"
						className="btns btn__secondary border__rad-4px"
						onClick={() => setModalFlag((prev) => !prev)}>
						Cancel
					</button>
					<button
						type="button"
						className="btns btn__secondary border__rad-4px"
						onClick={dummyDataHandler}>
						Dummy Data
					</button>
				</div>
			</form>
		</div>
	);
};
