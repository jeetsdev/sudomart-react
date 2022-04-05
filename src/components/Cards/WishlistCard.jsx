import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../contexts";
import { ACTION_TYPE } from "../../utils";


export const WishlistCard = ({ product }) => {

    const { img, altImage, title, price, rating, discountPrecentage, _id } = product;
    const { cartState: { cartItem
    }, cartDispatch } = useCart();
    const { wishlistState, wishlistDispatch } = useWishlist();

    const { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = ACTION_TYPE;

    // Add to wishlist handler
    const addToWishlistHandler = (product) => {
        wishlistDispatch({
            type: ADD_TO_WISHLIST,
            payload: product
        })
    }

    // Remove From Wishlist Handler
    const removeFromWishlistHandler = (product) => {
        wishlistDispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: product._id
        })
    }

    return <div className="product">
        {/* E-Commerce product card here */}
        <div className="card card__e-commerce card__badge grid">

            {/* Card Upper section here */}
            <div className="card__sec-upper center__flex flex__dir-col">

                {/* Wishlist icon here*/}
                <div className="card__upper-icon center__flex">
                    {wishlistState.wishlistItem.find(item => item._id === _id) ?
                        <i className="fas fa-heart border__rad-full center__flex margin-8px" onClick={() => removeFromWishlistHandler(product)}></i> :
                        <i className="far fa-heart border__rad-full center__flex margin-8px" onClick={() => addToWishlistHandler(product)}></i>}
                </div>
                {/* Card image here */}
                <div className="card__upper-image center__flex">
                    <img
                        src={img}
                        className="image__res"
                        alt={altImage}
                    />
                </div>

                {/*Card overlay section here  */}
                <div className="card__upper-overlay">
                    <div className="upper__overlay-btn">
                        {cartItem.find(item => item._id === _id) ? <Link to="/cart"><button className="btns btn__primary">Go to Cart</button></Link> : <button className="btns btn__primary" onClick={() => cartDispatch({ type: ADD_TO_CART, payload: product })}>Add to Cart</button>}
                    </div>
                </div>
            </div>

            {/* Card Lower section here */}
            <div className="card__sec-lower center__flex flex__dir-col">
                <div className="center__flex lower__sec-details  flex__dir-col">
                    <p className="details__sec-title txt-center">{title}</p>
                    <p className="details__sec-rating">{[...Array(5)].map((item, index) => {
                        return rating > index ? <span key={index} className="far fas fa-star txt-sml txt-grey"></span> : <span key={index} className="far fa-star txt-sml txt-grey"></span>
                    })}</p>
                    <p className="price__sec-current margin__tb-8px"> <span className="price__sec-prev">₹ {price}</span> ₹ {price * discountPrecentage / 100}</p>
                </div>
            </div>
        </div>
    </div>

}