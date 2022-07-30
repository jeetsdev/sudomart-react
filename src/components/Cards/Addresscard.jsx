import { useAddress } from "../../contexts"
import { ACTION_TYPE } from "../../utils";

export const Addresscard = ({ address, setModalFlag }) => {
	const { addressDispatch } = useAddress();
	const { ADD_MODAL_ADDRESS } = ACTION_TYPE;
	const editAddressHandler = () => {
		addressDispatch({ type: ADD_MODAL_ADDRESS, payload: address })
		setModalFlag(prev => !prev);
	}
	return (
		<div>
			<p className="text-mid text-pri margin__tb-8px">{address?.name}</p>
			<p className="txt-sml">{address?.address}</p>
			<p className="txt-sml">{address?.city}, {address?.state}, {address?.country}, {address?.pincode}</p>
			<p className="txt-sml">Mob: {address?.mobile}</p>
			<button className="btns btn__link border__rad-4px margin-8px" onClick={editAddressHandler}>Edit</button>
		</div>
	)
}
