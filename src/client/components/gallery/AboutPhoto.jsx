// @flow

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import getTimeInfo from "../utils/getTimeInfo";
import Spinner from "../extra/Spinner";

import styles from "../sass/blocks/gallery/about-photo.scss";

type Props = {
	data: AboutPhotoData | null,
	containerClassName: string,
	onLikeHandler: Function,
	wide: boolean,
	viewportVersion: ViewportVersionType
};

type State = {
	extended: boolean
};

const defineLengthOfDescription = (text: string, extended: boolean) => {
	const stringLength = 56;
	let ending;
	if (extended) {
		return text;
	}
	if (text.length <= stringLength) {
		ending = "";
	} else ending = "...";
	return `${text.slice(0, stringLength)}${ending}`;
};

class AboutPhoto extends PureComponent<Props, State> {
	static defaultProps = {
		containerClassName: "",
		wide: false
	};

	state = {
		extended: false
	};

	onClickHandler = () => {
		if (this.props.data.liked === true) {
			this.props.onLikeHandler(false);
		} else this.props.onLikeHandler(true);
	};

	toggleExtension = event => {
		this.setState(prevState => {
			const extended = !prevState.extended;
			return {
				extended
			};
		});
	};

	render() {
		const {
			containerClassName,
			data,
			onLikeHandler,
			wide,
			viewportVersion
		} = this.props;
		const { extended } = this.state;
		let timeInfo = "";
		let description = "";
		// если это мобильная версия либо "широкое" фото, всегда показывать раскрытую версию
		const nowExtended =
			viewportVersion === "mobile" || wide ? true : extended;
		if (data !== null) {
			timeInfo = getTimeInfo(data.timeStamp);
			description = defineLengthOfDescription(
				data.description,
				nowExtended
			);
		}
		return (
			<section
				className={`${styles["about-photo"]} ${containerClassName} ${
					wide ? `${styles["about-photo--wide"]}` : ""
				}`}
				onMouseEnter={this.toggleExtension}
				onMouseLeave={this.toggleExtension}
				onFocus={this.toggleExtension}
				onBlur={this.toggleExtension}
				onTouchStart={this.toggleExtension}
			>
				<div className={styles["about-photo__inner"]}>
					{data === null ? (
						<Spinner />
					) : (
						<React.Fragment>
							<h3 className={styles["about-photo__header"]}>
								<span className={styles["about-photo__author"]}>
									{data.authorName}
								</span>{" "}
								<span>({timeInfo.toUpperCase()})</span>
							</h3>
							<p className={styles["about-photo__description"]}>
								<span>{description}</span>
							</p>
							<button
								className={`${styles["about-photo__likes"]} ${
									wide
										? `${
												styles[
													"about-photo__likes--wide"
												]
										  }`
										: ""
								}`}
								onClick={this.onClickHandler}
							>
								<svg
									width="15"
									height="15"
									fillOpacity={data.liked ? "1" : "0"}
								>
									<use xlinkHref="img/svg/sprite.svg#heart" />
								</svg>
								<span
									className={
										styles["about-photo__like-label"]
									}
								>
									НРАВИТСЯ: {data.likes}
								</span>
							</button>
						</React.Fragment>
					)}
				</div>
			</section>
		);
	}
}

AboutPhoto.defaultProps = {
	containerClassName: "",
	wide: false
};

const mapDispatchToProps = (state, ownProps) => ({
	viewportVersion: state.viewportVersion,
	...ownProps
});

export default connect(mapDispatchToProps)(AboutPhoto);
