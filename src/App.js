import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import MovieState from './context/MovieState';
import Layout from './components/Layout';
import Home from './pages/Home';
import './styles/main.scss';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MovieState>
					<Switch>
						<Layout path="/" exact={true} component={Home} />
					</Switch>
				</MovieState>
			</BrowserRouter>
		</div>
	);
}

export default App;
