export const ProductCard = ({ product }) => {
    const { img, altImage, title, price, isWhislisted,rating } = product;
    return <div className="product">
        {/* E-Commerce product card here */}
        <div className="card card__e-commerce card__badge grid">

            {/* Card Upper section here */}
            <div className="card__sec-upper center__flex flex__dir-col">

                {/* Wishlist icon here*/}
                <div className="card__upper-icon center__flex">
                    {isWhislisted ? <i className="fas fa-heart border__rad-full center__flex margin-8px"></i> : <i className="far fa-heart border__rad-full center__flex margin-8px"></i>}
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
                        <p className="shopping__cart-icon center__flex"> + </p>
                    </div>
                    <div className="upper__overlay-btn">
                        <button className="btns btn__primary">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Card Lower section here */}
            <div className="card__sec-lower center__flex flex__dir-col">
                <div className="center__flex lower__sec-details  flex__dir-col">
                    <p className="details__sec-title txt-center">{title}</p>
                    <p className="details__sec-rating">{[...Array(5)].map((item, index) => {
                        return rating > index ? <span key={index} className="far fas fa-star txt-sml txt-grey"></span> : <span key={index} className="far fa-star txt-sml txt-grey"></span>
                    }) }</p>
                    <p className="price__sec-current margin__tb-8px"> <span className="price__sec-prev">₹ {price * 2}</span> ₹ {price}</p>
                </div>
            </div>
        </div>
    </div>

}