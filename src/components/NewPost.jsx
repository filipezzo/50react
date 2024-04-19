import { useState } from "react";

export function NewPost() {
	const [formData, setFormData] = useState({
		title: "",
		body: "",
		id: Math.random() * 100 + 1,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.title || !formData.body) return;

		const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const data = await res.json();
		console.log(data);

		setFormData({
			title: "",
			body: "",
			id: Math.random() * 100 + 1,
		});
	};

	return (
		<div className="rounded-md border bg-blue-400 p-4">
			<h2 className="my-4 text-3xl">Adicionar um post</h2>
			<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
				<input
					placeholder="title"
					name="title"
					className="rounded-md px-4 py-2 text-black outline-none "
					value={formData.title}
					onChange={handleChange}
				/>
				<input
					placeholder="body"
					name="body"
					className="rounded-md px-4 py-2 text-black outline-none "
					value={formData.body}
					onChange={handleChange}
				/>
				<button className="mx-auto max-w-40 rounded-md bg-white px-4 py-2 font-bold text-blue-500">
					Enviar
				</button>
			</form>
		</div>
	);
}
