export function Input({ label, ...rest }) {
	return (
		<div className="flex flex-col gap-4">
			<label htmlFor={label}>{label}</label>
			<input
				id={label}
				name={label}
				className="placeholder:gray-500 rounded-md border-none bg-transparent px-4 py-1.5 text-gray-500 outline-none ring-1 ring-gray-500 focus-within:ring-blue-500"
				{...rest}
			/>
		</div>
	);
}
