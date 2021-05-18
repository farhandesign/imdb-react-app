import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ title, poster_path, overview, vote_average, id }) => {
	return (
		<Link to={`/${id}`}>
			<div className="card">
				<img className="card__img" src={process.env.REACT_APP_IMG_API + poster_path} alt="movie" />
				<div className="card__info">
					<h3>{title}</h3>
					<span>{vote_average}</span>
				</div>
				<div className="card__overview">
					<h3>Overview</h3>
					<p>{overview}</p>
				</div>
			</div>
		</Link>
	);
};

export default Movie;
