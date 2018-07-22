// @flow

import React from 'react';
// import styles from '../sass/blocks/page-title.scss';
import { splitedPageTitle } from '../../utils/utils.jsx'; //

const PageTitle = (props: { pageTitle: string }) => (
	<section className="page-title">
		<div className="page-title__inner">
			<h1 className="page-title__text">
				{splitedPageTitle(props.pageTitle)}
			</h1>
		</div>
	</section>
);

export default PageTitle;
