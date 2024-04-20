export function Button({ prev, children, ...rest }) {
	if (prev)
		return (
			<button
				className="rounded-md bg-white px-4 py-2 text-center font-semibold text-blue-500 "
				{...rest}
			>
				{children}
			</button>
		);
	return (
		<button
			className="rounded-md bg-blue-500 px-4 py-2 text-center font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 "
			{...rest}
		>
			{children}
		</button>
	);
}
