import { Route, Routes } from "react-router-dom";
import Create from "../pages/create/Create";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import AuthGuard from "./AuthGuard";

export function Router() {
	return (
		<Routes>
			<Route element={<AuthGuard isPrivate />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route element={<AuthGuard isPrivate={false} />}>
				<Route path="/login" element={<Login />} />
				<Route path="/create" element={<Create />} />
			</Route>
		</Routes>
	);
}
