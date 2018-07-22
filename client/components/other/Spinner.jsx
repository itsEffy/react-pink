// @flow

import React from "react";
// import styles from "../sass/blocks/spinner.scss";

type Props = {
	color: string
};

const Spinner = ({ color }: Props) => (
	<div className="spinner-outer">
		<div className="spinner" style={{ borderColor: color }} />
	</div>
);

Spinner.defaultProps = {
	color: ""
};

export default Spinner;
