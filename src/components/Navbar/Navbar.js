import React, { useState } from 'react';

const Navbar = () => {
	const [ movies, setMovies ] = useState([]);
	const [ query, setQuery ] = useState('');

	const handleOnSubmit = (e) => {
		e.preventDefault();

		fetch(process.env.REACT_APP_SEARCH_API + query).then((res) => res.json()).then((data) => {
			console.log(data);
			setMovies(data.results);
		});
	};

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<nav className="nav__container">
			<h1>Nav</h1>
			<form onSubmit={handleOnSubmit}>
				<input
					className="search"
					type="search"
					placeholder="Search..."
					value={query}
					onChange={handleOnChange}
				/>
			</form>
		</nav>
	);
};

export default Navbar;
