import { Link } from "react-router-dom"

export const HeaderIcon = ({ iconName, route, quantity }) => {
    return <Link to={`${route}`} className="bagde__sec margin-1rem">
        <i className={`fas ${iconName}`} />
        <span className="bagde__sec-text border__rad-full center__flex">
            {quantity}
        </span>
    </Link>
}