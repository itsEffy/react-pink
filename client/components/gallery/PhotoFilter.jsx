// @flow

import React, { PureComponent } from "react";

import Button from "../form/Button";
import FilterImage from "./FilterImage";
import Range, { Icon } from "../form/Range";

import styles from "../sass/blocks/gallery/filter.scss";

type Props = {};

type State = {
	contrast: number,
	color: number,
	blur: number
};

class PhotoFilter extends PureComponent<Props, State> {
	state = {
		contrast: 0,
		color: 0,
		blur: 0
	};

	componentWillMount() {
		this.reset();
	}

	trackStyle = {
		backgroundColor: "#283645",
		height: 2
	};

	handleStyle = {
		border: "3px solid #d22856",
		height: 22,
		width: 22,
		marginLeft: -11,
		marginTop: -8,
		backgroundColor: "#fff"
	};

	defaultValues = {
		contrast: 100,
		color: 0,
		blur: 0
	};

	changeValue = (name: string, value: number) => {
		this.setState({ [name]: value });
	};

	reset = () => {
		this.setState(this.defaultValues);
	};

	render() {
		const { contrast, color, blur } = this.state;
		return (
			<section className={styles["filter"]}>
				<div className={styles["filter__inner"]}>
					<FilterImage
						contrast={contrast / 100}
						color={color}
						blur={blur}
					/>
					<div className={styles["filter__panel"]}>
						<div className={styles["filter__sliders"]}>
							<Range
								name="blur"
								valueRange={10}
								defaultValue={0}
								value={blur}
								onChange={this.changeValue}
								showIcon
							/>
							<Range
								name="contrast"
								valueRange={200}
								value={contrast}
								onChange={this.changeValue}
								showIcon
							/>
							<Range
								name="color"
								valueRange={360}
								defaultValue={90}
								value={color}
								onChange={this.changeValue}
								showIcon
							/>
						</div>
						<Button
							label="Сбросить все фильтры"
							light
							specStyles={styles["filter__btn"]}
							onClick={this.reset}
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default PhotoFilter;
