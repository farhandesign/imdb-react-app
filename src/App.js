import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import MovieState from './context/MovieState';
import QueryState from './context/QueryState';
import Layout from './components/Layout';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';
import './styles/main.scss';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<QueryState>
					<MovieState>
						<Switch>
							<Layout path="/" exact={true} component={Home} />
							<Layout path="/search" exact={true} component={SearchPage} />
							<Layout path="/:id" exact={true} component={MoviePage} />
						</Switch>
					</MovieState>
				</QueryState>
			</BrowserRouter>
		</div>
	);
}

export default App;
