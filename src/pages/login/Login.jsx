import useAuth from "../../hooks/useAuth";

export function Login() {
	const { onSignIn, isSignIn } = useAuth();
	console.log(isSignIn);
	return (
		<div className="p-10">
			Login
			<button
				className="my-4 block rounded-md bg-emerald-500 p-4 text-white outline-none"
				onClick={onSignIn}
			>
				Logar
			</button>
		</div>
	);
}
