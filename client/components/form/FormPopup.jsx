// @flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import LinkButton from "./LinkButton";

import styles from "../sass/blocks/popup.scss";
import btnS from "../sass/blocks/form-btn.scss";

type PopupProps = {
	title: string,
	text: string,
	specStyles: string,
	buttonType: "link" | "close",
	closePopup: Function
};

const Popup = ({
	title,
	text,
	specStyles,
	buttonType,
	closePopup
}: PopupProps) => (
	<section className={`${styles["popup"]}`}>
		<div className={`${styles["popup__inner"]}`}>
			<div className={`${styles["popup__message"]}`}>
				<h3 className={`${styles["popup__title"]}`}>{title}</h3>
				<p className={`${styles["popup__text"]}`}>{text}</p>
			</div>
			<div className={`${styles["popup__footer"]}`}>
				{buttonType === "link" ? (
					<LinkButton specStyles={`${styles["popup__btn"]}`} />
				) : (
					<Button
						label="Закрыть окно"
						type="button"
						onClick={closePopup}
						specStyles={`${styles["popup__btn"]}`}
					/>
				)}
			</div>
		</div>
	</section>
);
/*
class Popup extends PureComponent<PopupProps> {
	render() {
		return;
	}
}
*/

Popup.defaultProps = {
	buttonType: "close",
	specStyles: "",
	closePopup: null
	// type: "success"
};

const mapStateToProps = state => ({
	viewportVersion: state.viewportVersion
});

export default connect(mapStateToProps)(Popup);
