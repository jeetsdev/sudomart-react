import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
	AddressProvider,
	AuthProvider,
	CartProvider,
	FilterProvider,
	ProductProvider,
	WishlistProvider,
} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<CartProvider>
					<WishlistProvider>
						<FilterProvider>
							<ProductProvider>
								<AddressProvider>
									<App />
								</AddressProvider>
							</ProductProvider>
						</FilterProvider>
					</WishlistProvider>
				</CartProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root"),
);
