import { Filter, Footer, Header, ProductCard } from "../../components"
import { useFilter } from "../../contexts/filter-context";
import { useProduct } from "../../contexts/product-context"
import { filterProduct } from "../../utils/filterProduct";
import "./ProductListing.css"

export const ProductListing = () => {
    const { productData } = useProduct();
    const { filterState } = useFilter();
    const finalProductData = filterProduct(filterState, productData);
    
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