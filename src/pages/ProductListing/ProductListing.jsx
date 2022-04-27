import { useEffect } from "react";
import { Filter, Footer, Header, ProductCard } from "../../components"
import { useFilter, useProduct } from "../../contexts";
import { filterProduct } from "../../utils/filterProduct";
import "./ProductListing.css"

export const ProductListing = () => {
    const { productData } = useProduct();
    const { filterState } = useFilter();
    const finalProductData = filterProduct(filterState, productData);
    
    useEffect(() => {
        // Scrolling to the top of the page
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <>
            <div className="container__main center__flex flex__dir-col">
                <Header />
                <main className="product__site-wrapper">
                    <Filter />
                    <section className="site__product-sec">
                        <div className="product__sec-cards grid grid__col-4">
                            {finalProductData && finalProductData.map(product => {
                                return <ProductCard key={product.id} product={product} />
                            })}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}