import { useState } from "react";

function App() {
	const [text, setText] = useState("");
	const [message, setMessage] = useState(null);
	const chRemaining = 20 - text.length;

	const handleChange = (e) => {
		setMessage(null);
		setText(e.target.value.trim());
	};

	const handleSubmit = () => {
		setMessage(null);
		if (!text) {
			setMessage("Please submit something 😐");
			return;
		}
		if (text.length >= 20) {
			setMessage("Please shorten your text");
			return;
		}

		setMessage("Text submitted! :D");
		setText("");
	};
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-neutral-950 text-neutral-200 antialiased">
			<main className="flex w-full max-w-2xl flex-col gap-4 rounded-md border p-4">
				<header className="flex items-center justify-between">
					<span>Limited text input</span>
					<span>
						Characters remaining:{" "}
						<strong
							className={chRemaining > 0 ? "text-emerald-500" : "text-rose-500"}
						>
							{chRemaining}
						</strong>
					</span>
				</header>
				<input
					className="rounded-md bg-transparent px-4 py-2 text-white outline-none ring-1 ring-blue-400"
					value={text}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white outline-none ring-1 ring-blue-400"
				>
					Submit
				</button>
				{message && <p>{message}</p>}
			</main>
		</div>
	);
}

export default App;
