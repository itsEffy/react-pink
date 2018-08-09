// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import PriceSlider from "./PriceSlider.jsx";
import PriceStatic from "./PriceStatic.jsx";
import data from "./priceData.json";

import ieSvgPatching from "../../utils/ieSvgPatching";

// import styles from '../sass/blocks/home/price.scss';

type Props = {};

type State = {
	showSlider: boolean
};

class Price extends Component<Props, State> {
	state = {
		showSlider: false
	};

	componentDidMount() {
		this.setState({
			showSlider: true
		});
		ieSvgPatching();
	}

	componentDidUpdate() {
		ieSvgPatching();
	}

	render() {
		return (
			<section className="price">
				<div
					className={`price__inner ${
						this.props.viewportVersion === "mobile" &&
						this.state.showSlider
							? ""
							: "no-paddings"
					}`}
				>
					<h2 className="visually-hidden">Тарифы и цены</h2>
					{this.props.viewportVersion === "mobile" &&
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
