// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PriceSlider from './PriceSlider.jsx';
import PriceStatic from './PriceStatic.jsx';
import data from './priceData.json';

// import styles from '../sass/blocks/home/price.scss';
/*
const xPrice = (props: { viewportVersion: ViewportVersionType }) => (
	<section className="price">
		<div className="price__inner">
			<h2 className="visually-hidden">Тарифы и цены</h2>
			{props.viewportVersion === 'mobile' ? (
				<PriceSlider data={data} />
			) : (
				<PriceStatic data={data} />
			)}
		</div>
	</section>
);
*/

class Price extends Component {
	state = {
		showSlider: false
	};

	componentDidMount() {
		this.setState({
			showSlider: true
		});
	}

	render() {
		return (
			<section className="price">
				<div
					className={`price__inner ${
						this.props.viewportVersion === 'mobile' &&
						this.state.showSlider
							? ''
							: 'no-paddings'
					}`}
				>
					<h2 className="visually-hidden">Тарифы и цены</h2>
					{this.props.viewportVersion === 'mobile' &&
					this.state.showSlider ? (
						<PriceSlider data={data} />
					) : (
						<PriceStatic data={data} />
					)}
				</div>
			</section>
		);
	}
}

const mapStateToProps = ({ viewportVersion }) => ({ viewportVersion });

export default connect(mapStateToProps)(Price);
