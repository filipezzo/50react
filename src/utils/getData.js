const BASE_URL = "https://library-api.uidotdev.workers.dev";

export async function getData(id) {
	const response = await fetch(`${BASE_URL}/books/${id}`);
	if (!response.ok) throw new Error("Erro ao buscar dado dos livros");
	return await response.json();
}
