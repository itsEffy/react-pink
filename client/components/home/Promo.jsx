// @flow

import React from 'react';
// import styles from "../sass/blocks/home/promo.scss";
import HandPicture from './HandPicture.jsx';
import Download from './Download.jsx';

const Promo = (props: {}) => (
	<section className="promo">
		<div className="promo__inner">
			<h1 className="visually-hidden" style={{ display: 'none' }}>
				Pink
			</h1>
			<div className="promo__image">
				<HandPicture />
			</div>
			<Download containerClassName="promo__download" />
		</div>
	</section>
);

export default Promo;
