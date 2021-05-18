import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MovieContext from '../../context/movie-context';
import QueryContext from '../../context/query-context';

const Search = () => {
	let history = useHistory();

	const { setMovies } = useContext(MovieContext);
	const { query, setQuery } = useContext(QueryContext);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (query) {
			fetch(process.env.REACT_APP_SEARCH_API + query).then((res) => res.json()).then((data) => {
				console.log(data);
				setMovies(data.results);
				history.push('/search');
			});
		}
	};

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<input
					className="search"
					type="search"
					placeholder="Search for movies"
					value={query}
					onChange={handleOnChange}
				/>
			</form>
		</div>
	);
};

export default Search;
