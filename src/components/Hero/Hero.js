import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ id }) => {
	const [ movie, setMovie ] = useState('');

	const defaultMovieId = '399566';

	useEffect(
		() => {
			fetch(
				`${process.env.REACT_APP_TMDB_API}/movie/${id ? id : defaultMovieId}?api_key=${process.env
					.REACT_APP_TMDB_API_KEY}`
			)
				.then((res) => res.json())
				.then((data) => {
					setMovie(data);
				});
		},
		[ setMovie, id ]
	);

	return (
		<div className="container hero">
			{movie && (
				<div className="featured__movie" key={movie.id}>
					<img
						className="backdrop"
						src={`${process.env.REACT_APP_IMG_API}${movie.backdrop_path}`}
						alt={movie.title}
					/>
					<div className="movie__info">
						<Link to={`/${movie.id}`} style={{ color: 'white' }}>
							<h1>
								{movie.title} <span>({movie.release_date.slice(0, 4)})</span>
							</h1>
						</Link>
						<p>
							{movie.release_date} (<span>{movie.original_language.toUpperCase()}</span>)
						</p>
						<h2>Overview</h2>
						<p>{movie.overview}</p>
						<div className="genres">
							<h5>Genres:</h5>
							{movie.genres.map((genre) => <p key={`${movie.id}${genre.name}`}>{genre.name}</p>)}
						</div>

						<div className="user__rating">
							<h5>User Rating:</h5>
							<p className="movie__rating">{movie.vote_average}</p>
						</div>
					</div>
					<div className="movie__img">
						<img src={`${process.env.REACT_APP_IMG_API}${movie.poster_path}`} alt={movie.title} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
