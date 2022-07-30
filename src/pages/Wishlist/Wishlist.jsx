import { Link } from "react-router-dom";
import { WishlistCard } from "../../components";
import { useWishlist } from "../../contexts";
import "./Wishlist.css";

export const Wishlist = () => {
	const {
		wishlistState: { wishlistItem },
	} = useWishlist();

	return (
		<>
			<h2 className="headline-2 main__title margin-1rem center__flex">
				<i className="fas fa-heart margin__lr-8px"></i>
				My Wishlist
			</h2>
			<main className="wishlist__site-wrapper margin-1rem">
				{/* <Filter /> */}
				<section className="site__wishlist-sec">
					{wishlistItem.length === 0 ? (
						<div className="center__flex flex__dir-col cart__card-empty">
							{/*  No items here */}
							<div className="center__flex headline-3 wishlist__no-item">
								Nothing here{" "}
								<i className="fas fa-heart-broken margin-8px"></i>{" "}
								! Let's add something.
							</div>
							<Link
								to="/products"
								className="btns btn__primary border__rad-4px margin-1rem center__flex">
								Return to Shop
							</Link>
						</div>
					) : (
						<div className="wishlist__sec-cards grid grid__col-4">
							{wishlistItem.map((product) => {
								return (
									<WishlistCard
										product={product}
										key={product._id}
									/>
								);
							})}
						</div>
					)}
				</section>
			</main>
		</>
	);
};
