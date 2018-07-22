// @flow

import changeTelFormat from "./changeTelFormat.jsx";
import handleStringValue from "./handleStringValue";
import handleEmailValue from "./handleEmailValue";
import handleTextValue from "./handleTextValue";

const transformValue = (value: string, type: string) => {
	switch (type) {
		case "text":
			return handleStringValue(value);
		case "tel":
			return changeTelFormat(value);
		case "email":
			return handleEmailValue(value);
		case "textarea":
			return handleTextValue(value);
		default:
			return handleTextValue(value);
	}
};

export default transformValue;
