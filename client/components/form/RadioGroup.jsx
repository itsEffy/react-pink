// @flow

import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { Label } from "./FormTemplates";
import { setAppOptions } from "../actions/formActionCreators";

import { formSavingDelay as saveDelay } from "../extra/constants";

import styles from "../sass/blocks/form-templates.scss";

type RadioProps = {
	name: string,
	value: string,
	label: string,
	checked: boolean,
	specStyles: string,
	handleRadioChange: Function
};

const Radio = ({
	name,
	value,
	label,
	checked,
	specStyles,
	handleRadioChange
}: RadioProps) => (
	<div className={styles["radio"]}>
		<Label label={label} id={value} className={styles["radio__label"]}>
			<input
				type="radio"
				id={value}
				name={name}
				value={value}
				className={styles["radio__element"]}
				checked={checked}
				onChange={handleRadioChange}
			/>
			<span className={styles["radio__indicator"]} />
		</Label>
	</div>
);

// Набор радио
// Не требует проверки состояния валидации вообще, поскольку дефолтное значение уже установлено
// (полная и настоящая валидация должна быть реализована на сервере),
// но требует автосохранения в хранилище после каждого изменения

type RadioGroupProps = {
	settings: RadioGroupSettings,
	specStyles: string,

	savedValue: string,
	saveValue: Function
};

type RadioGroupState = {
	selectedValue: string
};

class RadioGroupTemplate extends PureComponent<
	RadioGroupProps,
	RadioGroupState
> {
	state = {
		selectedValue: ""
	};

	// установить начальное значение из хранилища
	componentWillMount() {
		this.setState({ selectedValue: this.props.savedValue });
	}

	saveTimeout;

	handleValueChange = event => {
		clearTimeout(this.saveTimeout);

		const { value } = event.target;
		this.setState({ selectedValue: value });

		this.saveTimeout = setTimeout(() => {
			this.props.saveValue(value);
		}, saveDelay);
	};

	render() {
		const {
			specStyles,
			settings: { name, valueList }
		} = this.props;
		const { selectedValue } = this.state;

		return (
			<div className={`${styles["radio-group"]} ${specStyles}`}>
				{valueList.map(item => (
					<Radio
						name={name}
						value={item.value}
						label={item.label}
						key={item.value}
						checked={item.value === selectedValue}
						specStyles={specStyles}
						handleRadioChange={this.handleValueChange}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	savedValue: state[ownProps.settings.name],
	...ownProps
});

const mapDispatchToProps = (dispatch: Function) => ({
	saveValue(value: string) {
		dispatch(setAppOptions(value));
	}
});

const RadioGroup = connect(mapStateToProps, mapDispatchToProps)(
	RadioGroupTemplate
);

export default RadioGroup;
