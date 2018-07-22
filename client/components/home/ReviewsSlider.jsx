// @flow

// Здесь реализация конкретного слайдера отзывов. Получение данных и установка настроек
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/actionCreators';

import ReviewsSlick from './ReviewsSlick.jsx';

type Props = {
	amount: number,
	start: number,
	reviews: Array<Review> | null | false,
	getReviews: Function
};

class ReviewsSlider extends Component<Props> {
	componentDidMount() {
		this.props.getReviews();
	}

	render() {
		const { reviews } = this.props;
		switch (reviews) {
			case null:
				this.template = null;
				break;
			case false:
				// Для демонстрации. На самом деле блок не сильно важен,
				// так что его вообще лучше не отображать, если он не загрузился
				this.template = (
					<div className="error-block">
						К сожалению, с интернет-соединением что-то не так, и
						отзывы о приложении не загрузились. Но поверьте, они
						замечательные!
					</div>
				);
				break;
			default:
				this.template = <ReviewsSlick data={reviews} />; //
		}
		return this.template;
	}
}

const mapStateToProps = ({ reviews }) => ({ reviews });
const mapDispatchToProps = dispatch => ({
	getReviews() {
		dispatch(fetchReviews());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReviewsSlider);
