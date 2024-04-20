import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function Pokemon() {
	const [id, setId] = useState(1);
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		const getPokemon = async () => {
			try {
				const response = await api.get(`/${id}`);
				setPokemon(response);
			} catch (e) {
				console.log(e);
			}
		};
		getPokemon();
	}, [id]);

	const handleDec = () => {
		if (id < 1) return;
		setId((prev) => prev - 1);
	};

	const handleInc = () => {
		setId((prev) => prev + 1);
	};
	return (
		<div className="mx-auto flex h-[600px] w-full max-w-md flex-col items-center justify-between gap-8 rounded-md border p-4">
			{pokemon.data && (
				<div>
					<h2 className="mb-8 text-center text-2xl">{pokemon.data.name}</h2>
					<img
						className=" object-cover"
						src={pokemon.data.sprites.other.dream_world.front_default}
						alt="imagem do pokemon"
					/>
				</div>
			)}

			<div className="flex items-center justify-between gap-8">
				<button
					disabled={id <= 1}
					className="rounded-md bg-blue-500 px-4 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-50"
					onClick={handleDec}
				>
					Prev
				</button>
				<button
					className="rounded-md bg-blue-500 px-4 py-2 font-bold"
					onClick={handleInc}
				>
					Next
				</button>
			</div>
		</div>
	);
}
