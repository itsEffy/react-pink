// @flow

import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { inputActionCreator } from "../../actions/formActionCreators";

// import styles from "../sass/blocks/form-btn.scss";

type ButtonProps = {
	disabled: boolean,
	specStyles: string,
	id: string,
	label: string,
	type: "button" | "submit",
	onClick: Function,
	light: boolean,
	autofocus?: boolean
};

class Button extends PureComponent<ButtonProps> {
	static defaultProps = {
		specStyles: "",
		id: "",
		disabled: false,
		type: "button",
		light: false,
		autofocus: false
	};

	render() {
		const {
			specStyles,
			id,
			disabled,
			label,
			type,
			light,
			autofocus,
			onClick
		} = this.props;

		return (
			<button
				type={type}
				className={`form-btn ${
					light ? "form-btn--light" : ""
				} ${specStyles}`}
				disabled={disabled}
				id={id}
				onClick={onClick}
				draggable
				autoFocus={autofocus}
			>
				{label}
			</button>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ ...ownProps });

const mapDispatchToProps = (dispatch: Function, ownProps) => ({ ...ownProps });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Button);
