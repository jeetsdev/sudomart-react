import { useFilter } from "../../contexts/filter-context";
import { ACTION_TYPE } from "../../utils";
import { CheckBoxComp } from "./CheckBoxComp";
import { RadioBoxComp } from "./RadioBoxComp";

export const Filter = () => {
	const { filterState, filterDispatch } = useFilter();
	const { priceRange, sortBy } = filterState;
	const { CLEAR_ALL, PRICE_RANGE, SORT_BY_PRICE } = ACTION_TYPE;

	return (
		<aside className="site__filter-sec">
			<div className="filter__sec-title center__flex">
				<h3>Filter</h3>
				<button
					className="btns btn__secondary margin-8px border__rad-4px "
					onClick={() => filterDispatch({ type: CLEAR_ALL })}>
					Clear
				</button>
			</div>
			<div className="filter__sec-price">
				<h3>Price</h3>
				<input
					type="range"
					min={100}
					max={1000}
					value={priceRange}
					onChange={(event) =>
						filterDispatch({
							type: PRICE_RANGE,
							payload: event.target.value,
						})
					}
				/>
				<p>Max Price : {priceRange}</p>
			</div>
			<div className="filter__sec-category">
				<h3>Categories</h3>
				<form action="" className="center__flex flex__dir-col">
					{/* Category component here */}
					<CheckBoxComp labelText="Tees" id="cat-tees" />
					<CheckBoxComp labelText="Hoodies" id="cat-hoodies" />
					<CheckBoxComp labelText="Stickers" id="cat-stickers" />
				</form>
			</div>
			<div className="filter__sec-rating">
				<h3>Rating</h3>
				<form action="" className="center__flex flex__dir-col">
					{/* Rating component here */}
					<RadioBoxComp
						id="four-star"
						name="rating"
						labelText="4 Star and above"
					/>
					<RadioBoxComp
						id="three-star"
						name="rating"
						labelText="3 Star and above"
					/>
					<RadioBoxComp
						id="two-star"
						name="rating"
						labelText="2 Star and above"
					/>
					<RadioBoxComp
						id="one-star"
						name="rating"
						labelText="1 Star and above"
					/>
				</form>
			</div>
			<div className="filter__sec-sort">
				<h3>Sort by</h3>
				<form action="" className="center__flex flex__dir-col">
					<div>
						<input
							type="radio"
							checked={sortBy === "LOW_TO_HIGH"}
							name="sort-by-price"
							id="low-to-high"
							onChange={() =>
								filterDispatch({
									type: SORT_BY_PRICE,
									payload: "LOW_TO_HIGH",
								})
							}
						/>
						<label htmlFor="low-to-high">
							{" "}
							Price - low to high{" "}
						</label>
					</div>
					<div>
						<input
							type="radio"
							checked={sortBy === "HIGH_TO_LOW"}
							name="sort-by-price"
							id="high-to-low"
							onChange={() =>
								filterDispatch({
									type: SORT_BY_PRICE,
									payload: "HIGH_TO_LOW",
								})
							}
						/>
						<label htmlFor="high-to-low">
							{" "}
							Price - high to low{" "}
						</label>
					</div>
				</form>
			</div>
		</aside>
	);
};
