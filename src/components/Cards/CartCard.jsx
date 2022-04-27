import toast from "react-hot-toast";
import { useCart, useWishlist } from "../../contexts";

export const CartCard = ({ product }) => {

    const { img, qty, price, discountPrecentage, title, _id, rating } = product;
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
    const { wishlistState: { wishlistItem }, addToWishlist, removeFromWishlist } = useWishlist();

    return <div className="cart__card card__badge grid grid__col-50-50 margin-1rem">
        <p className="card__badge-icon">{discountPrecentage}% off</p>
        <div className="cart__card-sec center__flex">
            <img src={img} alt="" className="image__res" />
            <h3 className="cart__card-title">{title}</h3>
            <p className="price__sec price__sec-prev">{price * qty}</p>
            <p className="price__sec price__sec-crr">₹ {(price * discountPrecentage * qty) / 100}</p>

        </div>
        <div className="cart__card-sec center__flex margin__lr-8px">

            {/* Here mapping over a empty array to get index */}
            <p className="card__rating">{[...Array(5)].map((item, index) => {
                return rating > index ? <span key={index} className="far fas fa-star txt-sml txt-grey"></span> : <span key={index} className="far fa-star txt-sml txt-grey"></span>
            })}</p>
            <div className="card__quantity center__flex">
                <button className="btns btn__secondary-outline margin__lr-4px border__rad-4px" onClick={() => {
                    if (qty > 1) {
                        decreaseQuantity(product);
                    }
                    else {
                        toast.error("Can't decrease Quantity now.")
                    }
                }}>
                    -
                </button>
                <p className="center__flex margin__lr-8px">{qty}</p>
                <button className="btns btn__primary-outline margin__lr-4px border__rad-4px" onClick={() => increaseQuantity(product)}>
                    +
                </button>
            </div>
            <p className="center__flex card__action-btns">
                {wishlistItem?.find(item => item._id === _id) ? <i className="fas fa-heart border__rad-full center__flex margin-8px" onClick={() => removeFromWishlist(product)}></i> : <i className="far fa-heart border__rad-full center__flex margin-8px" onClick={() => addToWishlist(product)}></i>}
                <i className="fas fa-trash border__rad-full center__flex margin-8px" onClick={() => removeFromCart(product)}></i>
            </p>
        </div>
    </div>
}