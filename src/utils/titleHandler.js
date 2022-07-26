export const titleHandler = (path) => {
	if (path === "") {
		document.title = `SudoMart`;
	} else {
		document.title = `${
			path.split("")[0].toUpperCase() + path.slice(1)
		} - SudoMart`;
	}
};
