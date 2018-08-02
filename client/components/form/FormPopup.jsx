// @flow

import React, { PureComponent } from "react";
import Button from "./Button.jsx";
import LinkButton from "./LinkButton.jsx";

// import styles from "../sass/blocks/popup.scss";
// import btnS from "../sass/blocks/form-btn.scss";

type PopupProps = {
	title: string,
	text: string,
	specStyles: string,
	buttonType?: "link" | "close",
	closePopup?: Function | null,
	fullPage?: boolean
};

const Popup = ({
	title,
	text,
	specStyles,
	buttonType,
	closePopup,
	fullPage
}: PopupProps) => (
	<section
		className={`popup ${
			fullPage ? "popup--fullpage" : "popup--window"
		} ${specStyles}`}
		role="alert"
	>
		<div className="popup__inner">
			<div className="popup__message">
				<h3 className="popup__title">{title}</h3>
				<p className="popup__text">{text}</p>
			</div>
			<div className="popup__footer">
				{buttonType === "link" ? (
					<LinkButton specStyles="popup__btn" />
				) : (
					<Button
						label="Закрыть окно"
						type="button"
						onClick={closePopup}
						specStyles="popup__btn"
						autofocus
					/>
				)}
			</div>
		</div>
	</section>
);

Popup.defaultProps = {
	buttonType: "close",
	specStyles: "",
	closePopup: null,
	fullPage: false
	// type: "success"
};

export default Popup;
