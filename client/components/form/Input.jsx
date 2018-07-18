// @flow

import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

import { Label, InputIcon, ValidationMessage } from "./FormTemplates";
import { inputActionCreator } from "../actions/formActionCreators";

import transformValue from "../utils/transformValue";
import { setValidationStateOfField } from "../utils/checkFormValidity";
import {
	formValidationDelay as validDelay,
	formSavingDelay as saveDelay
} from "../extra/constants";

import styles from "../sass/blocks/form-templates.scss";

type InputProps = {
	settings: InputSettings,
	specStyles: string,

	saveValue: Function,
	savedValue: string,

	setFormValidity: Function
	// reset: boolean
};

type InputState = {
	isTouched: boolean,
	showMessage: boolean,
	value: string,
	validationState: { valid: boolean, validationMessage: string }
};

class Input extends PureComponent<InputProps, InputState> {
	state = {
		// Для простоты заведем отдельную переменную, которая изменится при первом же вводе и разрешит выводить сообщения об ошибке. До этого считается, что к полю еще не прикоснулись - запретить любые сообщения
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

	// состояние валидности сразу после свежайшего setState. добавлена для удобства и наглядности
	isValid;
	// состояние валидности после последней осуществившейся (!) валидации
	// всей формы для проверки ее нужности в будущем. Переменную не следует сохранять в state, т.к. шаблон не зависит от нее, а новый setState приведет к заведомо лишним вычислениям
	wasValid;

	// таймеры. требуется их постоянное существование за пределами функции
	// TODO (хорошо бы переписать дебаунс вообще как отдельную функцию)
	validationTimeout;
	saveTimeout;

	handleValueChange = event => {
		// в первую очередь очистим таймаут, если продолжается ввод
		clearTimeout(this.saveTimeout); // этот можно не очищать ? **
		clearTimeout(this.validationTimeout);

		const { validation, name, type } = this.props.settings;

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
				this.wasValid = this.isValid;
			}
		}, validDelay);

		// сохранить в store
		this.saveTimeout = setTimeout(() => {
			this.props.saveValue(value);
		}, saveDelay);
	};

	// Функция навигации с клавиатуры
	handleKeyDown;

	render() {
		const {
			type,
			name,
			label,
			placeholder,
			validation: { required, minLength, pattern }
		} = this.props.settings;
		const { saveValue, specStyles } = this.props;
		const {
			value,
			showMessage,
			isTouched,
			validationState: { valid, validationMessage }
		} = this.state;

		return (
			<div className={`${styles["input"]} ${specStyles}`}>
				{label ? (
					<Label
						id={name}
						label={label.toUpperCase()}
						className={`${styles["input__label"]}  label`}
						required={required}
					/>
				) : null}
				<div
					className={`${styles["input__box"]} ${
						styles[`input__box--${type}`]
					}  box`}
				>
					<input
						type={type}
						id={name}
						name={name}
						placeholder={placeholder}
						className={`${styles["input__element"]} ${
							styles[`input__element--${type} element`]
						} ${
							value !== "" && !showMessage
								? styles["input__element--success"]
								: ""
						}`}
						required={required}
						value={value}
						onKeyDown={this.handleKeyDown}
						onChange={this.handleValueChange}
					/>
					<InputIcon type={type} className={styles["input__icon"]} />
				</div>
				<ValidationMessage
					valid={valid}
					validationMessage={validationMessage}
					className={`${styles["input__message"]} message`}
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

const mapDispatchToProps = (dispatch: Function, ownProps) => {
	const actionName = inputActionCreator[ownProps.settings.name];
	return {
		saveValue(value) {
			dispatch(actionName(value));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
