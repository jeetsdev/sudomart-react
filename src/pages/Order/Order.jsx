import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../contexts';
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./Order.css"

export const Order = () => {

    const { cartState: { orderDetails } } = useCart();

    return (
        <main className="order__wrapper center__flex ">
            <div className="order__sec border__rad-4px card__shadow padding-1rem margin-1rem">
                <h2 className='center__flex h4'>Order Placed Successfully <span className='center__flex margin__lr-8px'><BsFillCheckCircleFill /></span></h2>
                <div className='order__sec-details margin-1rem'>
                    <p>Payment ID : <span className='margin__lr-8px'> {orderDetails?.paymentID}</span></p>
                    <p>Amount  : <span className='margin__lr-8px'> {orderDetails?.amount}</span></p>
                    <p>Quantity : <span className='margin__lr-8px'> {orderDetails?.quantity}</span></p>
                </div>
                <Link to="/products" className="btns btn__primary border__rad-4px center__flex">
                    Go to Shop
                </Link>
            </div>
        </main>
    )
}
