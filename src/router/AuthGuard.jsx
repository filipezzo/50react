import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export function AuthGuard({ isPrivate }) {
	const { isSignIn } = useAuth();

	if (isSignIn && !isPrivate) {
		return <Navigate to="/" />;
	}

	if (!isSignIn && isPrivate) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
}

export default AuthGuard;
