import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const CardSection = () => {
	const [ movies, setMovies ] = useState([]);
	const [ query, setQuery ] = useState('');

	useEffect(() => {
		fetch(process.env.REACT_APP_FEATURED_API).then((res) => res.json()).then((data) => {
			console.log(data);
			setMovies(data.results);
		});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (query) {
			fetch(process.env.REACT_APP_SEARCH_API + query).then((res) => res.json()).then((data) => {
				console.log(data);
				setMovies(data.results);
			});
			setQuery('');
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
					placeholder="Search..."
					value={query}
					onChange={handleOnChange}
				/>
			</form>
			<div className="card__section">{movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}</div>
		</div>
	);
};

export default CardSection;
