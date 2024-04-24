import { api } from "../api/api";

export class AuthService {
	static async singUp({ name, email, password }) {
		const { data } = await api.post("/auth", {
			name,
			email,
			password,
			id: crypto.randomUUID(),
		});
		return data;
	}

	static async signIn({ email, password }) {
		const { data } = await api.post("/login", { email, password });
		return data;
	}
}
