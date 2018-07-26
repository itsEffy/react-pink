// @flow

import React from "react";
import { Helmet } from "react-helmet";

import PageTemplate from "../other/PageTemplate.jsx";
import FormData from "./FormData.jsx";
// import Description from '../other/Description.jsx';

type Props = {
	route: {
		pageTitle: string,
		posted: boolean
	}
};

// posted нужно для статического роутинга

const TourPage = ({ route: { pageTitle, posted } }: Props) => (
	<PageTemplate pageTitle={pageTitle}>
		<FormData posted={posted} />
	</PageTemplate>
);

export default { component: TourPage };
