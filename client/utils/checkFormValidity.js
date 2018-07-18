// @flow

// ***
// Проверка на валидность будет осуществляться проверкой существования сообщения об ошибке
//
// ***

// Т.к. линтер запрещает итераторы типа for of, напишем его аналог

export const iterateOfObject = (obj: Object, func: Function) => {
	const keys = Object.keys(obj);
	if (keys.length === 0) {
		throw new Error("Объект не должен быть пустым");
	}
	let item;
	for (let it = keys.length; it; it -= 1) {
		item = keys[it - 1];
		func(item);
	}
};

// возвращает true если выбран хоть один чекбокс

export const checkCheckboxGroup = checkboxGroup => {
	let hasCheck = false;
	iterateOfObject(checkboxGroup, item => {
		if (checkboxGroup[item]) {
			hasCheck = true;
		}
	});
	return hasCheck;
};

export const setValidStateOfCheckboxGroup = checkboxGroup => {
	let isValid = true;
	let message = "";
	if (checkCheckboxGroup(checkboxGroup) === false) {
		isValid = false;
		message = "должен быть выбран хотя бы 1 элемент";
	}
	return { valid: isValid, validationMessage: message };
};

// Возвращает сообщение об обязательности заполнения, если нужно

const setMessageIfRequired = (field, required) => {
	if (required === true) {
		// если это объект с чекбоксами
		if (typeof field === "object") {
			if (checkCheckboxGroup(field) === false) {
				return "должен быть выбран хотя бы 1 элемент";
			}
		} else if (!field) {
			return "это обязательное поле";
		}
	}
	return "";
};

// Возвращает сообщение о неправильном значении (не соответствующем паттерну).
// Только для строк, если паттерн существует

const setMessageIfInvalid = (field, pattern: RegExp | void) => {
	if (
		typeof field === "string" &&
		field !== "" &&
		pattern !== undefined &&
		field.search(pattern) === -1
	) {
		return "введите правильное значение";
	}
	return "";
};

// Возвращает сообщение о слишком коротком значении, если есть такое требование

const setMessageIfTooShort = (field, minLength) => {
	if (minLength && field.length < minLength && field.length >= 1) {
		return `не меньше ${minLength} символов`;
	}
	return "";
};

// Возвращает объект с состоянием валидации конкретного поля

export const setValidationStateOfField = (
	field,
	{ required, minLength, pattern }
) => {
	let isValid = false;

	const message =
		setMessageIfRequired(field, required) ||
		setMessageIfTooShort(field, minLength) ||
		setMessageIfInvalid(field, pattern) ||
		"";

	if (message === "") {
		isValid = true;
	}

	return { valid: isValid, validationMessage: message };
};

// Возвращает объект с состоянием валидации всей формы

const setValidationState = (state: Object, fields: Object) => {
	const validationState = {};
	let isFormValid = true;

	iterateOfObject(fields, item => {
		validationState[item] = setValidationStateOfField(
			state[item],
			fields[item].validation
		);
		if (validationState[item].valid === false) {
			isFormValid = false;
		}
	});

	// Дополнительное поле для проверки всей формы
	validationState.isFormValid = isFormValid;

	return validationState;
};

// Простейший обход полученного массива значений и возврат true, если все элементы валидны
export const checkFormValidity = (validationList: Object) => {
	let isFormValid = true;
	iterateOfObject(validationList, item => {
		if (validationList[item] === false) {
			isFormValid = false;
		}
	});
	return isFormValid;
};

export default setValidationState;
