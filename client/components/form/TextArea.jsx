// @flow

import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

import { Label, ValidationMessage } from "./FormTemplates.jsx";
import { setEmotions } from "../../actions/formActionCreators";

import transformValue from "../../utils/transformValue";

import { setValidationStateOfField } from "../../utils/checkFormValidity";
import {
	formValidationDelay as validDelay,
	formSavingDelay as saveDelay
} from "../other/constants";

// import styles from "../sass/blocks/form-templates.scss";

// Практически повторяет поведение input type=text

type TextAreaProps = {
	settings: InputSettings,
	specStyles: string,

	saveValue: Function,
	savedValue: string,

	setFormValidity: Function
};

type TextAreaState = {
	isTouched: boolean,
	showMessage: boolean,
	value: string,
	validationState: { valid: boolean, validationMessage: string }
};

class TextArea extends PureComponent<TextAreaProps, TextAreaState> {
	static defaultProps = {
		settings: {
			label: "",
			placeholder: "",
			validation: { required: false }
		},

		specStyles: ""
	};

	state = {
		isTouched: false,
		showMessage: false,
		value: "",
		validationState: { valid: false, validationMessage: "" }
	};

	// при первой отрисовке получить сохраненные значения из store и
	// тут же установить на их основе корректный статус валидации
	componentWillMount() {
		const { savedValue, settings } = this.props;
		const initialValidationState = setValidationStateOfField(
			savedValue,
			settings.validation
		);
		this.setState({
			value: savedValue,
			validationState: initialValidationState
		});
	}

	// после отрисовки приступить к проверке валидации формы с задержкой
	// на случай валидности сохраненных значений
	componentDidMount() {
		setTimeout(() => {
			this.props.setFormValidity(
				this.props.settings.name,
				this.state.validationState.valid
			);
			// тут же присвоить статус прошлой валидации для последующих
			// проверок нужности обновления
			this.wasValid = this.state.validationState.valid;
		}, validDelay);
	}

	// данная функция устанавливает новое значение строки и состояния валидации
	setNewState = (value: string, validation: Object) => {
		this.setState(prevState => {
			const validationState = setValidationStateOfField(
				value,
				validation
			);

			this.isValid = validationState.valid;

			// сброс показа сообщения, если валидация прошла успешно
			// Разрешать только в случае, если сообщение уже было показано, а текущее значение
			// неверно. Однако как только значение станет валидным, пользователь должен быть
			// оповещен немедленно - стереть сообщение
			let showMessage = false;
			if (prevState.showMessage && !validationState.valid) {
				showMessage = true;
			}

			return {
				isTouched: true,
				showMessage,
				value,
				validationState
			};
		});
	};

	isValid;
	wasValid;
	validationTimeout;
	saveTimeout;

	handleValueChange = event => {
		// в первую очередь очистим таймаут, если продолжается ввод
		clearTimeout(this.validationTimeout);

		const { validation, name } = this.props.settings;
		const type = this.props.settings.type || event.target.type;

		// обработка значения в соответствии с его type
		// (фильтрация ввода для удобства и безопасности)
		const value = transformValue(event.target.value, type);

		this.setNewState(value, validation);

		// примечание: любые функции, сохраняющие элементы предыдущего состояния, если функция содержит еще setState, должны быть асинхронными(!), иначе реакт выполнит их раньше, чем начнет выполнять функцию, записанную в setState

		// если инпут был валидным, а сейчас вдруг стал невалидным, отозвать статус "валидно" у формы немедленно
		setTimeout(() => {
			if (this.wasValid === true && this.isValid === false) {
				this.props.setFormValidity(name, this.isValid);
				this.wasValid = this.isValid;
			}
		}, 10);

		// обычная асинхронная валидация с задержкой
		this.validationTimeout = setTimeout(() => {
			// Разрешить показ сообщения только если невалидно
			if (!this.isValid) {
				this.setState({
					showMessage: true
				});
			}

			// обновить валидацию всей формы
			// данное изменение произойдет только когда оно нужно (оптимизация):
			// 1) если состояние формы изменилось
			// 2) если не было экстренной валидации (выше)
			if (this.isValid !== this.wasValid) {
				this.props.setFormValidity(name, this.isValid);
				console.log(
					"валидируем с задержкой",
					this.isValid,
					this.wasValid
				);
				this.wasValid = this.isValid;
			}
		}, validDelay);

		// сохранить в store
		this.saveTimeout = setTimeout(() => {
			this.props.saveValue(value);
		}, saveDelay);
	};

	render() {
		const {
			name,
			label,
			placeholder,
			validation: { required }
		} = this.props.settings;
		const { saveValue, specStyles } = this.props;
		const {
			value,
			showMessage,
			isTouched,
			validationState: { valid, validationMessage }
		} = this.state;

		return (
			<div className={`textarea ${specStyles}`}>
				{label ? (
					<Label
						label={label.toUpperCase()}
						id={name}
						className="textarea__label label"
						required={required}
						onclick={"console.log(hey)"}
					/>
				) : null}
				<textarea
					placeholder={placeholder}
					name={name}
					className="textarea__element element"
					value={value}
					onChange={this.handleValueChange}
					required={required}
					id={name}
				>
					{value}
				</textarea>
				<ValidationMessage
					valid={valid}
					validationMessage={validationMessage}
					className="textarea__message message"
					showMessage={isTouched ? showMessage : false}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	savedValue: state[ownProps.settings.name],
	...ownProps
});

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
	saveValue(value) {
		dispatch(setEmotions(value));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TextArea);
