// @flow
import React from "react";
import Slick from "react-slick";

import slickStyles from "../sass/blocks/home/slick-slider.scss";
import styles from "../sass/blocks/home/reviews.scss";

const ReviewsSlick = (props: { data: Array<Review> }) => {
	// TODO Импортировать это из начальных настроек
	const tabletBr = 980;

	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		touchThreshold: 15,
		responsive: [
			{
				breakpoint: tabletBr,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	};

	const template = props.data.map(item => (
		<blockquote className={`${styles["reviews__item"]}`} key={item.id}>
			<cite className={styles["reviews__author-name--top"]}>
				{item.authorName}
			</cite>
			<p className={styles["reviews__text"]}>{item.text}</p>
			<cite className={styles["reviews__author-name--bottom"]}>
				{item.authorName}
			</cite>
			<p className={styles["reviews__author-about"]}>
				{item.authorAbout}
			</p>
		</blockquote>
	));

	return <Slick {...settings}>{template}</Slick>;
};

export default ReviewsSlick;
