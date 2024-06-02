import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { useState } from "react";

const BASE_URL = "https://library-api.uidotdev.workers.dev";

async function getData(bookId) {
	const url = `${BASE_URL}/books/${bookId}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Unable fetch data");
	}

	const data = await response.json();
	return data;
}

function useBook(bookId) {
	return useQuery({
		queryKey: ["book", bookId],
		queryFn: () => getData(bookId),
	});
}

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Example />
		</QueryClientProvider>
	);
}

function Example() {
	const [selectedBookId, setSelectedBookId] = useState("pD6arNyKyi8C");
	const { data, isPending, isError } = useBook(selectedBookId);

	if (isError) return "An error has occurred";

	return (
		<div className="flex flex-col gap-5 p-5">
			<header className="text-center text-3xl font-bold text-orange-500">
				books
			</header>
			<select
				className="rounded-md bg-transparent p-2"
				value={selectedBookId}
				onChange={(e) => setSelectedBookId(e.target.value)}
			>
				<option value="pD6arNyKyi8C">The Hobbit</option>
				<option value="aWZzLPhY4o0C">The Fellowship Of The Ring</option>
				<option value="12e8PJ2T7sQC">The Two Towers</option>
				<option value="WZ0f_yUgc0UC">The Return Of The King</option>
			</select>
			{isPending && <p>loading...</p>}
			<img src={data?.thumbnail} />
		</div>
	);
}
