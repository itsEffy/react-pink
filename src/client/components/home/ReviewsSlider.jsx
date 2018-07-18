// @flow

// Здесь реализация конкретного слайдера отзывов. Получение данных и установка настроек
import React, { Component } from "react";
import axios from "axios";
import { URL } from "../extra/constants";

import ReviewsSlick from "./ReviewsSlick";

type Props = {
	amount: number,
	start: number
};

type State = {
	loadingStatus: LoadingStatusType,
	reviews: Array<Review>,
	URL: string
};

class ReviewsSlider extends Component<Props, State> {
	state = {
		loadingStatus: "",
		reviews: []
	};

	componentDidMount() {
		axios
			.get(
				`${URL}/reviews?_start=${this.props.start}&_end=${
					this.props.amount
				}`
			)
			.then(response => {
				this.setState({
					reviews: response.data,
					loadingStatus: "loaded"
				});
			})
			.catch(error => {
				this.setState({
					loadingStatus: "failed"
				});
			});
	}

	template = null;

	render() {
		const { loadingStatus, reviews } = this.state;
		switch (loadingStatus) {
			case "loaded":
				this.template = <ReviewsSlick data={reviews} />; //
				break;
			case "failed":
				// Для демонстрации. На самом деле блок не сильно важен, так что его вообще лучше не отображать в случае любого статуса, кроме loaded
				this.template = (
					<div className="error-block">
						К сожалению, с интернет-соединением что-то не так, и
						отзывы о приложении не загрузились. Но поверьте, они
						замечательные!
					</div>
				);
				break;
			default:
				this.template = null; //
		}
		return this.template;
	}
}

export default ReviewsSlider;
