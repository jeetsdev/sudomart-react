import { Link } from "react-router-dom";
import { Header, Footer, CartCard, OrderSummaryCard } from "../../components";
import { useCart } from "../../contexts";
import "./Cart.css"

export const Cart = () => {
    const { cartState: { cartItem } } = useCart();
    return (
        <>
            <div className="container__main center__flex flex__dir-col">
                <Header />
                <h2 className="headline-2 main__title margin-1rem center__flex">
                    <i className="fas fa-shopping-bag margin__lr-8px"></i>
                    My Cart
                </h2>

                {/* Checking cart items here */}
                {cartItem.length === 0 ?
                    <div className="center__flex flex__dir-col cart__card-empty">
                        {/*  No items here */}
                        <div className="center__flex headline-3">Hey, it feels so light!
                            <p className="shopping__cart-icon center__flex">_</p>
                        </div>
                        <Link to="/products" className="btns btn__primary border__rad-4px margin-1rem center__flex">
                            Return to Shop
                        </Link>
                    </div>
                    : <div className="cart__site-wrapper grid grid__col-70-30">

                        {/* Item present here */}
                        <div className="cart__product-sec">
                            <div className="cart__product-item center__flex flex__dir-col">
                                {cartItem.map(item => {
                                    return <CartCard product={item} key={Math.random() * 100} />
                                })}
                            </div>
                        </div>
                        <div className="cart__details-sec margin-1rem">
                            <OrderSummaryCard />
                        </div>
                    </div>}
                <Footer />
            </div>
        </>
    )
}