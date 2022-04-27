import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../contexts";

export const ProductCard = ({ product }) => {
    const { img, altImage, title, price, rating, discountPrecentage, _id } = product;
    const { cartState: { cartItem }, addToCart } = useCart();
    const { wishlistState: { wishlistItem }, addToWishlist, removeFromWishlist } = useWishlist();
    const { authState: { authToken } } = useAuth();
    const navigate = useNavigate();

    return <div className="product">
        {/* E-Commerce product card here */}
        <div className="card card__e-commerce card__badge grid">

            {/* Card Upper section here */}
            <div className="card__sec-upper center__flex flex__dir-col">

                {/* Wishlist icon here*/}
                <div className="card__upper-icon center__flex">
                    {
                        wishlistItem?.find(item => item._id === _id)
                            ?
                            <i className="fas fa-heart border__rad-full center__flex margin-8px" onClick={() => authToken ? removeFromWishlist(product) : navigate("/login")} ></i>
                            :
                            <i className="far fa-heart border__rad-full center__flex margin-8px" onClick={() => authToken ? addToWishlist(product) : navigate("/login")} ></i>
                    }
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
                    <div className="upper__overlay-icon">
                    </div>
                    <div className="upper__overlay-btn">
                        {cartItem.find(item => item._id === _id) ? <Link to="/cart"><button className="btns btn__primary">Go to Cart</button></Link> : <button className="btns btn__primary" onClick={() => authToken ? addToCart(product) : navigate("/login")}>Add to Cart</button>}
                    </div>
                </div>
            </div>

            {/* Card Lower section here */}
            <div className="card__sec-lower center__flex flex__dir-col">
                <div className="center__flex lower__sec-details  flex__dir-col">
                    <p className="details__sec-title txt-center">{title}</p>

                    {/* Here mapping over a empty array to get index */}
                    <p className="details__sec-rating">{[...Array(5)].map((item, index) => {
                        return rating > index ? <span key={index} className="far fas fa-star txt-sml txt-grey"></span> : <span key={index} className="far fa-star txt-sml txt-grey"></span>
                    })}</p>
                    <p className="price__sec-current margin__tb-8px"> <span className="price__sec-prev">₹ {price}</span> ₹ {price * discountPrecentage / 100}</p>
                </div>
            </div>
        </div>
    </div>

}