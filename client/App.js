import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

import Layout from "./components/other/Layout.jsx";

const App = ({ route }) => (
	<div>
		<Layout>
			<div>{renderRoutes(route.routes)}</div>
		</Layout>
	</div>
);

export default {
	component: App
};
