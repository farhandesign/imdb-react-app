import React, { useState } from 'react';
import AuthContext from './auth-context';

const AuthState = (props) => {
	const [ query, setQuery ] = useState("");
	
	return <AuthContext.Provider value={query}>{props.children}</AuthContext.Provider>;
};

export default AuthState;
