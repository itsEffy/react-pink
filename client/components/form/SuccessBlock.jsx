// @flow

import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

import FormPopup from "../form/FormPopup.jsx";

if (!process) {
	const parent = document.getElementById("root");
}

type SuccessBlockProps = {
	type: "page" | "popup",
	successMessage: { title: string, text: string },
	closePopup: Function
};

// Портал нужен, так как поп-ап должен корректно позиционироваться относительно окна браузера.
// Для этого его следует переместить как можно ближе к корню

/*
const SuccessBlock = ({
	type,
	successMessage: { title, text },
	closePopup
}: SuccessBlockProps) => {
	if (type === "popup") {
		return createPortal(
			<FormPopup
				title={title}
				text={text}
				buttonType="close"
				closePopup={closePopup}
			/>,
			parent
		);
	}
	return <FormPopup title={title} text={text} buttonType="link" />;
};

*/

const SuccessBlock = ({
	type,
	successMessage: { title, text },
	closePopup
}: SuccessBlockProps) => {
	if (type === "popup") {
		return (
			<FormPopup
				title={title}
				text={text}
				buttonType="close"
				closePopup={closePopup}
			/>
		);
	}
	return <FormPopup title={title} text={text} buttonType="link" />;
};

SuccessBlock.defaultProps = {
	closePopup: null
};

export default SuccessBlock;
