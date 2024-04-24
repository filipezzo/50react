import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Router } from "./router";

function App() {
	return (
		<AuthContextProvider>
			<Header />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
