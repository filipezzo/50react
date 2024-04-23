import { Link } from "react-router-dom";
import { useUsers } from "./hooks/useUsers";

export function Users() {
	const { data } = useUsers();
	return (
		<div className="ga-4 flex flex-col">
			{data?.map((user) => (
				<div key={user.id}>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			))}
			<Link
				className="mt-4 max-w-72 rounded-md  border border-orange-500 p-4"
				to="/register"
			>
				Ir para registro
			</Link>
		</div>
	);
}

export default Users;
