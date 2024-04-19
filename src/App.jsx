import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { NewPost } from "./components/NewPost";
import { User } from "./components/User";

function App() {
	const [users, setUsers] = useState([]);
	const fiveUsers = users?.slice(0, 5);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users",
				);
				if (!response.ok) {
					throw new Error("Something went wrong");
				}

				const data = await response.json();

				setUsers(data);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className="flex min-h-screen w-full flex-col gap-4 bg-neutral-950 p-4 text-neutral-200 antialiased">
			<ul className="flex w-full flex-col gap-2 rounded-md border border-neutral-400 bg-neutral-600 p-4">
				{loading && <Loader />}
				{fiveUsers.length > 0 ? (
					fiveUsers.map((user) => <User key={user.id} user={user} />)
				) : (
					<p>No users</p>
				)}
			</ul>
			<NewPost />
		</div>
	);
}

export default App;
