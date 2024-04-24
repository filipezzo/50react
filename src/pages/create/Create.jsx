import { useForm } from "react-hook-form";
import { AuthService } from "../../services/AuthService";

export function Create() {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = handleSubmit(async ({ name, email, password }) => {
		await AuthService.singUp({ name, email, password });
		reset();
	});

	return (
		<div className="">
			<form
				onSubmit={onSubmit}
				className="my-16 flex max-w-4xl flex-col gap-4 rounded-md border border-zinc-400 p-8"
			>
				<h2 className="text-2xl font-medium ">Crie sua conta</h2>
				<input
					className="h-10 rounded-md border-none bg-transparent px-4 text-white outline-none ring-1 focus-within:ring-white "
					id="name"
					placeholder="name"
					type="text"
					{...register("name", { required: true })}
				/>
				<input
					className="h-10 rounded-md border-none bg-transparent px-4 text-white outline-none ring-1 focus-within:ring-white "
					id="email"
					type="email"
					placeholder="email"
					{...register("email", { required: true })}
				/>
				<input
					className="transparent h-10 rounded-md border-none bg-transparent bg-none  px-4 text-white outline-none ring-1 focus-within:ring-white"
					id="password"
					placeholder="Senha"
					type="password"
					{...register("password", { required: true })}
				/>
				<button className="rounded-md border-none bg-transparent px-4 py-2 outline-none ring-1  duration-300   hover:ring-white">
					Criar
				</button>
			</form>
		</div>
	);
}

export default Create;
