import { useQuery } from "@tanstack/react-query";

export function useUsers() {
	return useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3000/users");
			return response.json();
		},
	});
}
