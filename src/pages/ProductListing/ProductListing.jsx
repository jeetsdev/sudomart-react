import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Filter, ProductCard } from "../../components"
import { useFilter, useProduct } from "../../contexts";
import { FaFilter } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { ACTION_TYPE, filterProduct, titleHandler } from "../../utils";
import "./ProductListing.css"

export const ProductListing = () => {
    const { productData } = useProduct();
    const { filterState, filterDispatch } = useFilter();
    const finalProductData = filterProduct(filterState, productData);
    const { pathname } = useLocation();
    const { CLEAR_ALL } = ACTION_TYPE;
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    useEffect(() => {
        // Scrolling to the top of the page
        window.scrollTo({ top: 0 });
        // changing title
        titleHandler(pathname.split("/")[1]);
    }, [pathname])

    return (
        <main className="product__site-wrapper">
            <div className="filter-desktop">
                <Filter />
            </div>
            {
                showMobileFilter ?
                    <button className="btns btn__float filter__btn border__rad-full center__flex" onClick={() => setShowMobileFilter(prev => !prev)}>
                        <MdCancel />
                    </button>
                    :
                    <button className="btns btn__float filter__btn border__rad-full center__flex" onClick={() => setShowMobileFilter(prev => !prev)}>
                        <FaFilter />
                    </button>


            }
            {
                showMobileFilter && <div className="filter-mobile">
                    <Filter />
                </div>
            }
            <section className="site__product-sec">
                {finalProductData.length === 0 ?
                    <div className="center__flex product__no-item">
                        <p>No items found, <span className="btns btn__link" onClick={() => filterDispatch({ type: CLEAR_ALL })}>Clear</span> all filters.</p>
                    </div>
                    :
                    <div className="product__sec-cards grid grid__col-4">
                        {finalProductData.map(product => {
                            return <ProductCard key={product.id} product={product} />
                        })}
                    </div>
                }
            </section>
        </main>
    )
}