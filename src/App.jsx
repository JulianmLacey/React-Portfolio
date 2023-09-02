import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/navigation";
import Footer from "./components/footer";

function App() {
	return (
		<body>
			<Nav />
			<>
				<Outlet />
			</>
			<Footer />
		</body>
	);
}

export default App;
