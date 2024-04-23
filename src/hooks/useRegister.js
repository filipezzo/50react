import { useMutation } from "@tanstack/react-query";

export function useRegister() {
	return useMutation({
		mutationFn: async (variables) => {
			const response = await fetch("http://localhost:3000/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(variables),
			});
			return response.json();
		},
		onError: (error, variables) => {
			console.log(`Erro na request. ${error.toString()} variables:`, variables);
		},

		onSuccess: (data, variables) => {
			console.log("sucesso pai", { data, variables });
		},
	});
}
