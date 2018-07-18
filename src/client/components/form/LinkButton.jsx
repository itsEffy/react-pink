// @flow

import React, { Component, PureComponent } from "react";
import { Link } from "react-router-dom";

import styles from "../sass/blocks/form-btn.scss";

type LinkButtonProps = {
	specStyles: string,
	label: string
};

// реализовать два типа кнопки - на главную и вернуться

const LinkButton = ({ specStyles, label }: LinkButtonProps) => (
	<Link
		to={{ pathname: "/" }}
		className={`${styles["form-btn"]} ${specStyles}`}
	>
		{label.toUpperCase()}
	</Link>
);

LinkButton.defaultProps = {
	specStyles: "",
	label: "На главную"
};

export default LinkButton;
