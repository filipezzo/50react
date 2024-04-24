import { Crown } from "lucide-react";
import useAuth from "../hooks/useAuth";

export function Header() {
	const { isSignIn, onSignOut } = useAuth();
	return (
		<header className="flex h-20 w-full items-center justify-between bg-neutral-900 p-2">
			<Crown />
			{isSignIn && (
				<button
					className="rounded-md border bg-white px-4 py-2 text-black duration-300 hover:scale-105 hover:opacity-85"
					onClick={onSignOut}
				>
					Sair
				</button>
			)}
		</header>
	);
}
