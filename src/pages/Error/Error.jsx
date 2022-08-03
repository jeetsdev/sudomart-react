import { Link } from "react-router-dom";
import { ErrorImg } from "../../assets";
import "./Error.css";

export const Error = () => {
	return (
		<div className="center__flex flex__dir-col">
			<img src={ErrorImg} alt="page not found" className="error-img" />
			<Link to={"/"} className="btns btn__primary border__rad-4px margin-1rem">
				Go to Home
			</Link>
		</div>
	);
};
