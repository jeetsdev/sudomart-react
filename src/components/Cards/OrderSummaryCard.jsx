import { useCart } from "../../contexts"
import { usePayment } from "../../hooks/usePayment";

export const OrderSummaryCard = () => {
    const { cartState: { cartItem
    } } = useCart();
    const { displayRazorpay } = usePayment();

    // Totle price calculation here
    const totalPrice = cartItem.length === 0 ? 0 : cartItem.reduce((acc, crr) => {
        return acc + (crr.price * crr.qty)
    }, 0);

    // Totle quantity here
    const totalQty = cartItem.length === 0 ? 0 : cartItem.reduce((acc, crr) => {
        return acc + crr.qty
    }, 0);

    // discountPrice calculation here
    const discountPrice = (cartItem.length === 0 ? 0 : cartItem.reduce((acc, crr) => {
        return acc + ((crr.price * crr.discountPrecentage * crr.qty) / 100)
    }, 0)
    );

    return <div className="cart__details-order padding-1rem">

        {/* Order details title */}
        <div className="order__details-title padding-8px">
            <h3 className="headline-3">Order Summary</h3>
        </div>

        {/* Order items */}
        <div className="order__details-item padding-8px">
            <div className="item-price center__flex">
                <p>Price ({totalQty} Items) </p>
                <p>{totalPrice}</p>
            </div>
            <div className="item-discount center__flex">
                <p>Discount</p>
                <p className="text__green">- {discountPrice}</p>
            </div>
            <div className="item-delivery center__flex">
                <p>Delivery Charges</p>
                <p className="text__green">Free</p>
            </div>
        </div>

        {/* Order total */}
        <div className="order__details-total center__flex padding-8px">
            <h3 className="headline-3">TOTAL</h3>
            <h3 className="headline-3">{totalPrice - discountPrice}</h3>
        </div>

        {/* Order place */}
        <div className="order__details-place padding-8px">
            <p className="text__green">You will save {cartItem.length === 0 ? 0 : discountPrice} on this order.</p>
            <button className="btns btn__primary margin__tb-8px border__rad-4px" onClick={() => displayRazorpay({
                amount: totalPrice - discountPrice,
                quantity: totalQty,
            })}>Place order</button>
        </div>
    </div>

}

