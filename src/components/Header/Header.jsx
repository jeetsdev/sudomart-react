import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../contexts";
import { FaUserCircle } from "react-icons/fa";
import { BsFillHeartFill, BsFillBagCheckFill } from "react-icons/bs";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Header = () => {
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();
	const {
		authState: { authToken },
	} = useAuth();

	// Title hook here...
	useDocumentTitle();

	return (
		<header className="main__header">
			{/* Announcment bar here */}
			<section className="header__announcment-bar center__flex">
				<p>Flat 50% off on various products.</p>
			</section>

			{/* Navbar here */}
			<nav className="header__navbar center__flex">
				<nav className="nav center__flex">
					{/* Title section here */}
					<div className="nav__title-sec">
						<Link to={"/"}>
							<h3 className="headline-3 font-primary">
								{" "}
								SudoMart{" "}
							</h3>
						</Link>
					</div>

					{/* Search section here*/}
					<div className="nav__search-sec display__none">
						<form action="" className="center__flex">
							<i className="fas fa-search margin-8px txt-grey" />
							<input
								type="text"
								placeholder="Search items here"
							/>
						</form>
					</div>

					{/* Button section here*/}
					<div className="nav__button-sec center__flex">
						<Link to="/products">
							<button className="btns btn__secondary margin__lr-8px border__rad-4px">
								Shop
							</button>
						</Link>
						{authToken ? (
							<Link to={"/user"} className="nav__sec-user">
								<FaUserCircle className="nav__icons" />
							</Link>
						) : (
							<Link to={"/login"}>
								<button className="btns btn__primary border__rad-4px margin__lr-4px">
									Login
								</button>
							</Link>
						)}
						<Link
							to={`/wishlist`}
							className="bagde__sec bagde__sec-wishlist center__flex">
							<BsFillHeartFill className="nav__icons" />
							{authToken && (
								<span className="bagde__sec-text border__rad-full center__flex">
									{wishlistState?.wishlistItem.length}
								</span>
							)}
						</Link>
						<Link
							to={`/cart`}
							className="bagde__sec bagde__sec-cart center__flex">
							<BsFillBagCheckFill className="nav__icons" />
							{authToken && (
								<span className="bagde__sec-text border__rad-full center__flex">
									{cartState?.cartItem.length}
								</span>
							)}
						</Link>
					</div>
				</nav>
			</nav>
		</header>
	);
};
