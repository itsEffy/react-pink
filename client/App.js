import React from "react";
import { renderRoutes } from "react-router-config";
// import { fetchReviews } from './actions/actionCreators';
import Layout from "./components/other/Layout.jsx";

const App = ({ route }) => {
	return (
		<div>
			<Layout>
				<div>{renderRoutes(route.routes)}</div>
			</Layout>
		</div>
	);
};

export default {
	component: App
	// loadData: ({ dispatch }) => dispatch(fetchReviews())
};
