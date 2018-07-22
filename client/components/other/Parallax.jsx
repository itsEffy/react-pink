// @flow

import React, { Component } from "react";
import type { Node } from "react";

// import styles from "../sass/blocks/parallax.scss";

// В ParallaxActive оборачивается секция страницы, к которой должен быть применен параллакс-эффект
// ParallaxStatic - обертка для остальных, статичных частей страницы

type Props = {
	children: Node,
	titleText: string
};
type State = { heightOfParallaxContainer: string };

/*
export class ParallaxActiveX extends Component<Props, State> {
	state = { heightOfParallaxContainer: '90vh' };

	componentDidMount = () => {
		window.addEventListener('resize', this.setHeightOfParallaxContainer);
		this.setHeightOfParallaxContainer();
	};  */
/*
	componentWillUpdate = () => {
		this.setHeightOfParallaxContainer();
	}; */

/*

	setHeightOfParallaxContainer = () => {
		const container = document.querySelector('.parallax__layer');
		console.log('container: ', container);
		const childAbsolute = container.firstElementChild;
		console.log('his child: ', childAbsolute);
		const height = childAbsolute.clientHeight;
		console.log(height);
		this.setState({ heightOfParallaxContainer: `${height}px` });
	};

	render() {
		return (
			<div
				className={styles['parallax__group--active']}
				style={
					this.props.titleText !== 'none'
						? {
								height: `${
									this.state.heightOfParallaxContainer
								}`,
								minHeight: `${
									this.state.heightOfParallaxContainer
								}`
						  }
						: null
				}
			>
				<div
					className={`${styles['parallax__layer--base']} ${
						styles['parallax__layer']
					}`}
				>
					{React.cloneElement(this.props.children, {
						height: this.state.heightOfParallaxContainer
					})}
				</div>
				<div
					className={`${styles['parallax__layer--back']} ${
						styles['parallax__layer']
					}`}
				/>
			</div>
		);
	}
}

*/

/* <div className={styles[`parallax__group--active--${props.heightModifier}`]}> */

const defineLines = (text: string, maxLineLength: number = 23) => {
	/* const lineLength = 28; // желаемая длина одной строчки */
	const lineAmount = Math.ceil(text.length / maxLineLength);
	return lineAmount;
};

const getHeightForText = (text: string) => {
	const heightX = document.querySelector(".parallax__layer");
	console.log(".parallax__layer");
	const height = 240 + 64 * defineLines(text);
	return `${height}px`;
};

export const ParallaxActive = ({ titleText, children }: Props) => (
	<div
		className={`parallax__group--active--${
			titleText !== "none" ? `lines-${defineLines(titleText)}` : "full"
		}`}
	>
		<div className="parallax__layer--base  parallax__layer">{children}</div>
		<div className="parallax__layer--back  parallax__layer" />
	</div>
);

ParallaxActive.defaultProps = { titleText: "none" };

/*
export class ParallaxStatic extends Component {
	render() {
		return <div className={styles['parallax__group']}>{this.props.children}</div>;
	}
}

*/

export const ParallaxStatic = (props: { children: Node }) => (
	<div className="parallax__group">{props.children}</div>
);
