import React, { useState, useMemo } from 'react';
import MovieContext from './movie-context';

const AuthState = (props) => {
	const [ movies, setMovies ] = useState('');
	const value = useMemo(() => ({ movies, setMovies }), [ movies, setMovies ]);

	return <MovieContext.Provider value={value}>{props.children}</MovieContext.Provider>;
};

export default AuthState;
