import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = (props) => {
	return (
		<div>
			<Navbar />
			<div className="content" style={{ minHeight: 'calc(100vh - 112px)' }}>
				<Route path={props.path} exact={props.exact} component={props.component} />
			</div>
		</div>
	);
};

export default Layout;
