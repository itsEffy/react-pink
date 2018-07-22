// @flow

import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { Label, ValidationMessage } from "./FormTemplates.jsx";

import { setAchieve } from "../../actions/formActionCreators";

import {
	formValidationDelay as validDelay,
	formSavingDelay as saveDelay
} from "../other/constants";

import {
	setValidStateOfCheckboxGroup,
	checkCheckboxGroup
} from "../../utils/checkFormValidity";

// import styles from "../sass/blocks/form-templates.scss";

type CheckboxProps = {
	name: string,
	value: string,
	label: string,
	checked: boolean,
	handleCheckboxChange: Function
};

export class Checkbox extends PureComponent<CheckboxProps> {
	/*
	handleValueChange = event => {
		this.props.handleCheckboxChange(event);
	};
	*/

	render() {
		const {
			name,
			value,
			label,
			checked,
			handleCheckboxChange
		} = this.props;
		return (
			<div className="checkbox checkbox">
				<Label
					label={label}
					id={value}
					className="checkbox__label label"
					required={false}
				>
					<input
						type="checkbox"
						id={value}
						name={name}
						value={value}
						className="checkbox__element element"
						checked={checked}
						onChange={handleCheckboxChange}
					/>
					<span className="checkbox__indicator indicator" />
				</Label>
			</div>
		);
	}
}

// Набор чекбоксов
// Получает один объект с набором значений из store.
// Хранит текущие значения в своем state, вызывает проверку валидации формы немедленно (чекбоксы отмечаются гораздо реже, чем текст вводится в инпуты)

type CheckboxGroupProps = {
	settings: CheckboxGroupSettings,
	specStyles: string,

	savedValues: Object,
	saveValue: Function,

	setFormValidity: Function
};

type CheckboxGroupState = {
	values: Object,
	groupValidationState: { valid: boolean, validationMessage: string }
};

class CheckboxGroupTemplate extends PureComponent<
	CheckboxGroupProps,
	CheckboxGroupState
> {
	state = {
		values: {},
		groupValidationState: { valid: true, validationMessage: "" }
	};

	// установить начальное значение из хранилища
	componentWillMount() {
		this.setState({ values: this.props.savedValues });
	}

	// валидировать форму по окончании отрисовки в дом
	componentDidMount() {
		setTimeout(
			() =>
				this.props.setFormValidity(
					this.props.settings.name,
					this.state.groupValidationState.valid
				),
			validDelay
		);
	}

	// функция установления нового значения + состояния валидации
	setNewState = (name: string, newChecked: boolean) => {
		this.setState(prevState => {
			const values = {
				...prevState.values,
				[name]: newChecked
			};
			const groupValidationState = setValidStateOfCheckboxGroup(values);

			this.isValid = groupValidationState.valid;

			return {
				values,
				groupValidationState
			};
		});
	};

	wasValid;
	isValid;

	saveTimeout;
	validationTimeout;

	handleValueChange = event => {
		const { value, checked } = event.target;
		clearTimeout(this.saveTimeout);
		this.setNewState(value, checked);

		// сохранить в store с задержкой
		this.saveTimeout = setTimeout(() => {
			this.props.saveValue(value, checked);
		}, saveDelay);

		// немедленно отозвать статус "валидно" у формы при смене с true на false
		setTimeout(() => {
			if (this.wasValid === true && this.isValid === false) {
				this.props.setFormValidity(
					this.props.settings.name,
					this.isValid
				);
				this.wasValid = this.isValid;
			}
		}, 10);

		// но запретить беспокоить валидатор формы, если ничего не изменилось
		// (или состоялась экстренная валидация). Если изменилось, обновить статус
		// прошлой валидации
		this.validationTimeout = setTimeout(() => {
			if (this.isValid !== this.wasValid) {
				this.props.setFormValidity(
					this.props.settings.name,
					this.state.groupValidationState.valid
				);
				this.wasValid = this.isValid;
			}
		}, validDelay);
	};

	render() {
		const {
			name,
			validation: { required },
			valueList
		} = this.props.settings;
		const { savedValues, specStyles } = this.props;
		const {
			values,
			groupValidationState: { valid, validationMessage }
		} = this.state;

		return (
			<React.Fragment>
				<div className={`checkbox-group ${specStyles}`}>
					{valueList.map(item => (
						<Checkbox
							name={name}
							value={item.value}
							label={item.label}
							key={item.value}
							checked={values[item.value]}
							handleCheckboxChange={this.handleValueChange}
						/>
					))}
				</div>
				<ValidationMessage
					valid={valid}
					validationMessage={validationMessage}
					className="checkbox-group__message message"
					showMessage
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	savedValues: state[ownProps.settings.name],
	...ownProps
});

const mapDispatchToProps = (dispatch: Function) => ({
	saveValue(value: string, checked: boolean) {
		dispatch(setAchieve(value, checked));
	}
});

const CheckboxGroup = connect(
	mapStateToProps,
	mapDispatchToProps
)(CheckboxGroupTemplate);
export default CheckboxGroup;
