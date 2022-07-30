import { useState } from "react";
import { Filter, ProductCard } from "../../components";
import { useFilter, useProduct } from "../../contexts";
import { FaFilter } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { ACTION_TYPE, filterProduct } from "../../utils";
import "./ProductListing.css";

export const ProductListing = () => {
	const { productData } = useProduct();
	const { filterState, filterDispatch } = useFilter();
	const finalProductData = filterProduct(filterState, productData);
	const { CLEAR_ALL } = ACTION_TYPE;
	const [showMobileFilter, setShowMobileFilter] = useState(false);

	return (
		<main className="product__site-wrapper">
			<div className="filter-desktop">
				<Filter />
			</div>
			{showMobileFilter ? (
				<button
					className="btns btn__float filter__btn border__rad-full center__flex"
					onClick={() => setShowMobileFilter((prev) => !prev)}>
					<MdCancel />
				</button>
			) : (
				<button
					className="btns btn__float filter__btn border__rad-full center__flex"
					onClick={() => setShowMobileFilter((prev) => !prev)}>
					<FaFilter />
				</button>
			)}
			{showMobileFilter && (
				<div className="filter-mobile">
					<Filter />
				</div>
			)}
			<section className="site__product-sec">
				{finalProductData.length === 0 ? (
					<div className="center__flex product__no-item">
						<p>
							No items found,{" "}
							<span
								className="btns btn__link"
								onClick={() =>
									filterDispatch({ type: CLEAR_ALL })
								}>
								Clear
							</span>{" "}
							all filters.
						</p>
					</div>
				) : (
					<div>
						<p className="margin__tb-8px txt-grey">
							(Showing {finalProductData.length} products of{" "}
							{productData.length} products)
						</p>
						<div className="product__sec-cards grid grid__col-4">
							{finalProductData.map((product) => {
								return (
									<ProductCard
										key={product.id}
										product={product}
									/>
								);
							})}
						</div>
					</div>
				)}
			</section>
		</main>
	);
};
