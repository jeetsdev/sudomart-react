import "./App.css";
import { MyToast, Header, Footer } from "./components";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	return (
		<div className="App">
			<MyToast />
			<div className="container__main center__flex flex__dir-col">
				<Header />
				<div className="container__route">
					<NavigationRoutes />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
