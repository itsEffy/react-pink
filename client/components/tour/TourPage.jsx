// @flow

import React from 'react';
import { Helmet } from 'react-helmet';

import PageTemplate from '../other/PageTemplate.jsx';
import FormData from './FormData.jsx';
import Description from '../other/Description.jsx';

const TourPage = (props: { pageTitle: string }) => (
	<PageTemplate pageTitle={props.pageTitle}>
		<FormData />
	</PageTemplate>
);

export default TourPage;
