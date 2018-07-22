// @flow

import * as A from './actions';

// Изменение элементов форм

export function setSurname(surname: string) {
	return { type: A.SET_SURNAME_VALUE, payload: surname };
}

export function setName(name: string) {
	return { type: A.SET_NAME_VALUE, payload: name };
}

export function setPatronymic(patronymic: string) {
	return { type: A.SET_PATRONYMIC_VALUE, payload: patronymic };
}

export function setAppOptions(value: string) {
	return { type: A.SET_APPOPTIONS_VALUE, payload: value };
}

export function setTel(tel: string) {
	return { type: A.SET_TEL_VALUE, payload: tel };
}

export function setEmail(email: string) {
	return { type: A.SET_EMAIL_VALUE, payload: email };
}

export function setEmotions(text: string) {
	return { type: A.SET_EMOTIONS_VALUE, payload: text };
}

export function setAchieve(value: string, checked: boolean) {
	return { type: A.SET_ACHIEVE, payload: { value, checked } };
}

export function resetFormData() {
	return { type: A.RESET_FORM, payload: {} };
}

// Это словарь для доступа к нужной функции по имени поля

export const inputActionCreator = {
	surname: setSurname,
	name: setName,
	patronymic: setPatronymic,
	tel: setTel,
	email: setEmail
};

/* 
export const checkboxActionCreator = {
	selfie: setSelfieAchieve,
	burnt: setBurntAchieve,
	sawseleb: setSawSelebAchieve,
	souvenirs: setSouvenirsAchieve,
	hold: setHoldAchieve,
	destroy: setDestroyAchieve
}; 
*/
