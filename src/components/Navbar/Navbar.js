import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container nav__container">
				<Link to="/">
					<h1>IMDB</h1>
				</Link>
				<Search />
			</div>
		</nav>
	);
};

export default Navbar;
