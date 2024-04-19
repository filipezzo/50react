export function User({ user }) {
	return (
		<li key={user.id}>
			<strong>{user.username}</strong>
			<p>{user.email}</p>
		</li>
	);
}
