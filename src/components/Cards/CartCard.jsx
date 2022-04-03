import { useCart } from "../../contexts";
import { ACTION_TYPE } from "../../utils";

export const CartCard = ({ item }) => {
    const { INCREASE_ITEM_QTY, DECREASE_ITEM_QTY, REMOVE_FROM_CART } = ACTION_TYPE
    const { img, inCartQty, price, discountPrecentage, title, _id, rating, isWhislisted
    } = item;
    const { cartDispatch } = useCart()
    return <>
        <div className="cart__card card__badge grid grid__col-50-50 margin-1rem">
            <p className="card__badge-icon">{discountPrecentage}% off</p>
            <div className="cart__card-sec center__flex">
                <img src={img} alt="" className="image__res" />
                <h3 className="cart__card-title">{title}</h3>
                <p className="price__sec price__sec-prev">{price * inCartQty}</p>
                <p className="price__sec price__sec-crr">₹ {(price * discountPrecentage * inCartQty) / 100}</p>

            </div>
            <div className="cart__card-sec center__flex margin__lr-8px">
                <p className="card__rating">{[...Array(5)].map((item, index) => {
                    return rating > index ? <span key={index} className="far fas fa-star txt-sml txt-grey"></span> : <span key={index} className="far fa-star txt-sml txt-grey"></span>
                })}</p>
                <div className="card__quantity center__flex">
                    <button className="btns btn__primary-outline margin__lr-4px border__rad-4px" onClick={() => cartDispatch({
                        type: INCREASE_ITEM_QTY,
                        payload: {
                            id: item._id,
                            qty: item.inCartQty,
                        },
                    })}>+</button>
                    <p className="center__flex margin__lr-8px">{inCartQty}</p>
                    <button className="btns btn__secondary-outline margin__lr-4px border__rad-4px" onClick={() => cartDispatch({
                        type: DECREASE_ITEM_QTY,
                        payload: {
                            id: item._id,
                            qty: item.inCartQty,
                        },
                    })}>-</button>
                </div>
                <p className="center__flex card__action-btns">
                    {isWhislisted ? <i className="fas fa-heart border__rad-full center__flex margin-8px"></i> : <i className="far fa-heart border__rad-full center__flex margin-8px"></i>}
                    <i className="fas fa-trash border__rad-full center__flex margin-8px" onClick={() => cartDispatch({
                        type: REMOVE_FROM_CART,
                        payload: _id
                    })}></i>
                </p>
            </div>
        </div>
    </>

}