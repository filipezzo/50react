export function Header({ value, onSelectChange }) {
	const handleChange = (e) => {
		onSelectChange(e.target.value);
	};
	return (
		<header className="flex items-center justify-between">
			<h1>Books</h1>
			<select
				className="rounded-md border bg-transparent px-2"
				onChange={handleChange}
				value={value}
			>
				<option value="pD6arNyKyi8C">The Hobbit</option>
				<option value="aWZzLPhY4o0C">The Fellowship Of The Ring</option>
				<option value="12e8PJ2T7sQC">The Two Towers</option>
				<option value="WZ0f_yUgc0UC">The Return Of The King</option>
			</select>
		</header>
	);
}
