import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Filter, Footer, Header, ProductCard } from "../../components"
import { useFilter, useProduct } from "../../contexts";
import { ACTION_TYPE, filterProduct, titleHandler } from "../../utils";
import "./ProductListing.css"

export const ProductListing = () => {
    const { productData } = useProduct();
    const { filterState, filterDispatch } = useFilter();
    const finalProductData = filterProduct(filterState, productData);
    const { pathname } = useLocation();
    const { CLEAR_ALL } = ACTION_TYPE;

    useEffect(() => {
        // Scrolling to the top of the page
        window.scrollTo({ top: 0 });
        // changing title
        titleHandler(pathname.split("/")[1]);
    }, [pathname])

    return (
        <>
            <div className="container__main center__flex flex__dir-col">
                <Header />
                <main className="product__site-wrapper">
                    <Filter />
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
                <Footer />
            </div>
        </>
    )
}