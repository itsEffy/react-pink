// @flow

import React from "react";
import { Helmet } from "react-helmet";

import PageTemplate from "../other/PageTemplate.jsx";
import FormData from "./FormData.jsx";
// import Description from '../other/Description.jsx';

type Props = {
	route: {
		pageTitle: string
	}
};

const TourPage = ({ route: { pageTitle } }: Props) => (
	<PageTemplate pageTitle={pageTitle}>
		<FormData />
	</PageTemplate>
);

export default { component: TourPage };
