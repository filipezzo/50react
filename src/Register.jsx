import { useState } from "react";
import { useRegister } from "./hooks/useRegister";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const { mutate, isPending, data } = useRegister();

	console.log(data); //data vem da response.json()

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			id: crypto.randomUUID(),
			name,
			email,
		};
		mutate(newUser);
		setName("");
		setEmail("");
	};
	return (
		<div className="container  p-4">
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<h1 className="text-3xl">Registre um user</h1>
				<input
					className="rounded-md bg-transparent px-4 py-2 outline-none ring-1 ring-purple-500"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="rounded-md bg-transparent px-4 py-2 outline-none ring-1 ring-purple-500"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className="rounded-md bg-purple-400 py-2 text-purple-800">
					{isPending ? "Cadastrando" : "Cadastro"}
				</button>
			</form>
		</div>
	);
}

export default Register;
