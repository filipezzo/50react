import { useRef, useState } from "react";

function App() {
	const [legend, setLegend] = useState("");
	const [error, setError] = useState("");
	const fileRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		const file = fileRef?.current.files[0];

		if (file) {
			setError("");
			const fileType = file.type;
			const allow = ["image/jpeg", "image/png", "image/jpg"];
			const allowed = allow.includes(fileType);
			if (allowed) {
				const data = new FormData();
				data.append("image", file);
				data.append("legend", legend);

				const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
					method: "POST",
					headers: {
						"Content-Type": "multipart/form-data",
					},
					body: data,
				});

				const json = await res.json();
				console.log(json);
			}
		} else {
			setError("Selecione um arquivo");
		}
	};
	return (
		<div className="min-h-screen w-full bg-neutral-950 text-neutral-200 antialiased">
			<main className="p-4">
				<form onSubmit={handleSubmit} className="flex max-w-2xl flex-col gap-4">
					<h2>Selecione um arquivo</h2>
					<input type="file" ref={fileRef} />
					<input
						value={legend}
						onChange={(e) => setLegend(e.target.value)}
						type="text"
						placeholder="digite uma legenda para foto"
						className="rounded-md bg-transparent px-4  py-2 text-white outline-none ring-1 ring-blue-500"
					/>
					{error && <p className="text-xl text-rose-500">{error}</p>}
					<button className="rounded-md border bg-blue-500 px-2 py-4 ">
						Enviar
					</button>
				</form>
			</main>
		</div>
	);
}

export default App;
