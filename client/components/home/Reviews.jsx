// @flow

import React from 'react';
import styles from '../sass/blocks/home/reviews.scss';
import ReviewsSlider from './ReviewsSlider';

const Reviews = (props: {}) => (
	<section className={`${styles['reviews']}  reviews`}>
		<div className={`${styles['reviews__inner']}`}>
			<ReviewsSlider start={0} amount={3} />
		</div>
	</section>
);

export default Reviews;
