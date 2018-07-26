// @flow

import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

import FormPopup from "../form/FormPopup.jsx";

type SuccessBlockProps = {
	type: "page" | "popup",
	successMessage: { title: string, text: string },
	closePopup: Function
};

// Портал нужен, так как поп-ап должен корректно позиционироваться относительно окна браузера.
// Для этого его следует переместить как можно ближе к корню

const SuccessBlock = ({
	type,
	successMessage: { title, text },
	closePopup
}: SuccessBlockProps) => {
	const parent = document.getElementById("root");
	if (type === "popup") {
		console.log("портал");
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

SuccessBlock.defaultProps = {
	closePopup: null
};

export default SuccessBlock;
