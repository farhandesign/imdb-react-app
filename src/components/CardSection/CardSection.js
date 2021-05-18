import React, { useEffect, useContext } from 'react';
import MovieContext from '../../context/movie-context';
import Movie from '../Movie/Movie';

const CardSection = () => {
	const { movies, setMovies } = useContext(MovieContext);

	useEffect(
		() => {
			fetch(process.env.REACT_APP_FEATURED_API).then((res) => res.json()).then((data) => {
				setMovies(data.results);
			});
		},
		[ setMovies ]
	);

	return (
		<div>
			<div className="card__section">
				{movies && movies.map((movie) => <Movie key={movie.id} {...movie} />).slice(0, 10)}
			</div>
		</div>
	);
};

export default CardSection;
