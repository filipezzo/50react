import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Exercise } from "./view/components/Exercise";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Exercise />
		</QueryClientProvider>
	);
}

export default App;
