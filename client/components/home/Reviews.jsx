// @flow

import React, { Component } from "react";
// import styles from '../sass/blocks/home/reviews.scss';
import ReviewsSlider from "./ReviewsSlider.jsx";

class Reviews extends Component {
	state = {
		showSlider: false
	};

	componentDidMount() {
		// разрешает отрисовку только в контекте
		// клиентского реакт-приложения
		this.setState({
			showSlider: true
		});
	}

	render() {
		let template;
		if (this.state.showSlider) {
			template = <ReviewsSlider start={0} amount={3} />;
		} else template = null;
		return (
			<section className="reviews  reviews">
				<div className="reviews__inner">{template}</div>
			</section>
		);
	}
}

export default Reviews;
