import React from 'react';

const Cast = ({ name, profile_path }) => {
	return (
		<div className="cast">
			{profile_path && (
				<img className="profile__img" src={process.env.REACT_APP_IMG_API + profile_path} alt={name} />
			)}
			<div className="cast__name">
				<p>{name}</p>
			</div>
		</div>
	);
};

export default Cast;
