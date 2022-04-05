import { Link } from "react-router-dom"
import { useCart, useWishlist } from "../../contexts"
import { HeaderIcon } from "./HeaderIcon"

export const Header = () => {
    const { cartState } = useCart();
    const { wishlistState } = useWishlist();

    return <header className="main__header">

        {/* Announcment bar here */}
        <section className="header__announcment-bar center__flex">
            <p>Flat 50% off on various products.</p>
        </section>

        {/* Navbar here */}
        <nav className="header__navbar center__flex">
            <nav className="nav center__flex">

                {/* Title section here */}
                <div className="nav__title-sec">
                    <Link to={"/"}><h3 className="headline-3"> SudoMart </h3></Link>
                </div>

                {/* Search section here*/}
                <div className="nav__search-sec display__none">
                    <form action="" className="center__flex">
                        <i className="fas fa-search margin-8px txt-grey" />
                        <input type="text" placeholder="Search items here" />
                    </form>
                </div>

                {/* Button section here*/}
                <div className="nav__button-sec center__flex">
                    <Link to="/products" className="btns btn__primary margin__lr-8px border__rad-4px">Shop</Link>
                    <i className="fas fa-sign-in-alt margin-8px"></i>
                    <HeaderIcon iconName={"fa-heart"} route="/wishlist" quantity={wishlistState.wishlistItem.length} />
                    <HeaderIcon iconName={"fa-shopping-bag"} route="/cart" quantity={cartState.cartItem.length} />
                </div>
            </nav>
        </nav>
    </header>
}