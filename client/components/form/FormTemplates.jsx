// @flow

import React, { PureComponent } from "react";
import type { Node } from "react";

// import styles from "../sass/blocks/form-templates.scss";

// абсолютно тупые, без поведения шаблоны вспомогательных элементов

//
// Label

type LabelProps = {
	id: string,
	label: string,
	className: string,
	required?: boolean,
	children: Node
};

const Label = ({ id, label, className, required, children }: LabelProps) => (
	<label htmlFor={id} className={className}>
		{children}
		<span>{label}</span>
		{required === true ? (
			<abbr title="Обязательно к заполнению">{`\u00A0*`}</abbr>
		) : null}
	</label>
);

Label.defaultProps = {
	required: false,
	children: null
};

//
// Сообщение о валидации

type ValidationProps = {
	valid: boolean,
	validationMessage: string,
	className: string,
	showMessage?: boolean
};

const ValidationMessage = ({
	valid,
	validationMessage,
	className,
	showMessage
}: ValidationProps) => (
	<span className={className}>
		{showMessage && !valid ? validationMessage : null}
	</span>
);

ValidationMessage.defaultProps = {
	showMessage: false
};

//
// Иконка на специальных инпутах

const InputIcon = (props: { type: InputType, className: string }) => {
	let template;
	switch (props.type) {
		case "email":
			template = (
				<span className={props.className}>
					<svg width="18" height="14">
						<use xlinkHref="img/svg/form-sprite.svg#mail" />
					</svg>
				</span>
			);
			break;
		case "tel":
			template = (
				<span className={props.className}>
					<svg width="20" height="20">
						<use xlinkHref="img/svg/form-sprite.svg#phone" />
					</svg>
				</span>
			);
			break;
		default:
			template = null;
	}
	return template;
};

//
// Набор опций
// legend очень тяжело стилизуется, поэтому ширину придется задавать программно, а с ней и размеры

type FieldsetProps = {
	legend: string,
	required?: boolean,
	children: Node,
	specStyles?: string
};

const calculateLegendWidth = (legend: string, hasStar: boolean) => {
	const width = legend.length * 9.6 + (hasStar ? 8 : 0); // средняя ширина буквы. Очень неточная цифра, зависящая еще и от шрифта
	return {
		fontSize: "14px",
		maxWidth: `${width}px`,
		boxSizing: "content-box"
	};
};

class Fieldset extends PureComponent<FieldsetProps> {
	defaultProps = {
		required: false,
		specStyles: ""
	};

	render() {
		const { legend, required, children, specStyles } = this.props;
		return (
			<div className={`fieldset__box ${specStyles}`}>
				<fieldset className="fieldset__element element">
					<div className="fieldset__legend legend">
						<legend style={calculateLegendWidth(legend, required)}>
							{legend.toUpperCase()}
							{required === true ? (
								<abbr title="Обязательно к заполнению"> *</abbr>
							) : null}
						</legend>
					</div>
					<div className="fieldset__inner inner">{children}</div>
				</fieldset>
			</div>
		);
	}
}

//
// Кнопка отправки формы

type SubmitProps = {
	text: string,
	disabled?: boolean
};

const Submit = ({ text, disabled }: SubmitProps) => (
	<button type="submit" className="submit" disabled={disabled}>
		{text}
	</button>
);

Submit.defaultProps = {
	disabled: false
};

export { Fieldset, Label, ValidationMessage, InputIcon };
