import { useBook } from "../hooks/useBook";

export function Book({ id }) {
	const { data, isFetching, isStale, refetch, status } = useBook(id);

	if (status === "pending") {
		return <p>loading...</p>;
	}

	if (status === "error") {
		return <p>wops, algo deu errado</p>;
	}

	return (
		<main className="flex gap-5 p-5">
			<div className="flex-1">
				<img
					className="h-full max-h-96 w-full rounded-md object-cover"
					src={data.thumbnail}
					alt={data.title}
				/>
			</div>
			<div className="flex flex-1 flex-col gap-4">
				<h2>{data.title}</h2>
				<small>{data.authors.join(", ")}</small>
				<div>
					<button
						disabled={isStale}
						className="h-10 rounded-md bg-violet-400 px-4"
					>
						Checkout
					</button>
					{isStale && !isFetching && (
						<>
							<p>Talvez vc precise atualizar o data</p>
							<button onClick={refetch}>Atualizar</button>
						</>
					)}
					{isFetching && <p>atualizando...</p>}
					{!isStale && <p>fresh data</p>}
				</div>
				<p>{data.description}</p>
			</div>
		</main>
	);
}
