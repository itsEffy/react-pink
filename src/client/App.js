import React from 'react';
import { renderRoutes } from 'react-router-config';
// import Header from './components/header/Header';
// import { fetchCurrentUser } from './actions';

const Header = () => <h1>i'm header</h1>;

const App = ({ route }) => {
	return (
		<div>
			<Header />
			<div>{renderRoutes(route.routes)}</div>
		</div>
	);
};

export default {
	component: App
	// , loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
