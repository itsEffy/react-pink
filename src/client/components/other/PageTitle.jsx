// @flow

import React from 'react';
import styles from '../sass/blocks/page-title.scss';
import { splitedPageTitle } from '../../utils/utils'; //

const PageTitle = (props: { pageTitle: string }) => (
	<section className={styles['page-title']}>
		<div className={styles['page-title__inner']}>
			<h1 className={styles['page-title__text']}>
				{splitedPageTitle(props.pageTitle)}
			</h1>
		</div>
	</section>
);

export default PageTitle;
