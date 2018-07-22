// @flow

import React, { Component, PureComponent } from "react";
import Slider from "rc-slider";

// import styles from "../sass/blocks/gallery/filter.scss";
// import sliderStyles from "../sass/other/rc-slider.scss";

type iconProps = {
	name: string
};

const Icon = ({ name }: iconProps) => {
	let template;
	switch (name) {
		case "contrast":
			template = (
				<svg width="22" height="22">
					<use xlinkHref="img/svg/gallery-sprite.svg#contrast" />
				</svg>
			);
			break;
		case "color":
			template = (
				<svg width="30" height="30">
					<use xlinkHref="img/svg/gallery-sprite.svg#color" />
				</svg>
			);
			break;
		case "blur":
			template = (
				<svg width="28" height="28">
					<use xlinkHref="img/svg/gallery-sprite.svg#blur" />
				</svg>
			);
			break;
		default:
			template = null;
	}
	return <span className="filter__range-icon">{template}</span>;
};

type Props = {
	name: string,
	value: number,
	valueRange: number,
	onChange: Function,
	showIcon: boolean
};

type State = {};

const trackStyle = {
	backgroundColor: "#283645",
	height: 2
};

const handleStyle = {
	border: "2px solid #d22856",
	height: 20,
	width: 20,
	marginLeft: -10,
	marginTop: -7,
	backgroundColor: "#f2f2f2"
};

class Range extends PureComponent<Props, State> {
	changeValue = (value: number) => {
		const { onChange, name } = this.props;
		onChange(name, value);
	};

	render() {
		const { value, valueRange, showIcon, name } = this.props;
		return (
			<div className="filter__range-box">
				{showIcon ? <Icon name={name} /> : null}
				<Slider
					trackStyle={trackStyle}
					handleStyle={handleStyle}
					railStyle={trackStyle}
					min={0}
					max={valueRange}
					value={value}
					onChange={this.changeValue}
				/>
			</div>
		);
	}
}

export default Range;
