// @flow

import React, { PureComponent } from "react";

type FormNoteProps = {
	specStyles: string
};

const FormNote = ({ specStyles }: FormNoteProps) => (
	<div className={specStyles}>
		<p className="label">
			<span className="em">*</span> - ОБЯЗАТЕЛЬНЫЕ ПОЛЯ
		</p>
	</div>
);

export default FormNote;
