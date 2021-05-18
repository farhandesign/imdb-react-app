import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Cast from '../components/Cast/Cast';

const MoviePage = () => {
	const [ cast, setCast ] = useState('');
	const [ number, setNumber ] = useState('11');
	const [ button, setButton ] = useState('show');

	const { id } = useParams();

	useEffect(
		() => {
			fetch(`${process.env.REACT_APP_TMDB_API}/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
				.then((res) => res.json())
				.then((data) => {
					setCast(data.cast);
				});
		},
		[ setCast, id ]
	);

	const handleShow = () => {
		setNumber(500);
		setButton('hide');
	};

	return (
		<div style={{ marginBottom: '80px' }}>
			<Hero id={id} />
			<h1>Cast</h1>
			<div className="cast__container">
				{cast.length > 0 && cast.map((actor) => <Cast key={actor.cast_id} {...actor} />).slice(0, number)}
			</div>
			{button === 'show' && (
				<button className="show__button" onClick={handleShow}>
					Show More
				</button>
			)}
		</div>
	);
};

export default MoviePage;
