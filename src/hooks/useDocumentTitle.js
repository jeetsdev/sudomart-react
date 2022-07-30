import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const useDocumentTitle = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	let title = "SudoMart";
	if (path !== "") {
		title = path.split("")[0].toUpperCase() + path.slice(1) + " - SudoMart";
	}
	useEffect(() => {
		window.document.title = `${title}`;
		// Scrolling top on every page
		window.scrollTo({ top: 0 });
	}, [title]);
};

export { useDocumentTitle };
