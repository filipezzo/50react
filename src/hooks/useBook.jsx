import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/getData";

export function useBook(id) {
	return useQuery({
		queryKey: ["book", id],
		queryFn: () => getData(id),
		staleTime: 5000,
	});
}
