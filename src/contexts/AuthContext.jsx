import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
	const [isSignIn, setIsSignIn] = useState(false);

	const onSignIn = () => setIsSignIn(true);
	const onSignOut = () => setIsSignIn(false);
	return (
		<AuthContext.Provider value={{ isSignIn, onSignIn, onSignOut }}>
			{children}
		</AuthContext.Provider>
	);
}
