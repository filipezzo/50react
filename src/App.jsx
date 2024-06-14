import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Lib from "./components/Lib";
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Lib />
		</QueryClientProvider>
	);
}

export default App;
