// @flow

import * as A from "./actions";

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

// ***
// Отдельное изменение для каждого чекбокса
/*
export function setSelfieAchieve(checked: boolean) {
	return { type: A.SET_SELFIE_ACHIEVE, payload: checked };
}

export function setBurntAchieve(checked: boolean) {
	return { type: A.SET_BURNT_ACHIEVE, payload: checked };
}

export function setSawSelebAchieve(checked: boolean) {
	return { type: A.SET_SAWSELEB_ACHIEVE, payload: checked };
}

export function setSouvenirsAchieve(checked: boolean) {
	return { type: A.SET_SOUVENIRS_ACHIEVE, payload: checked };
}

export function setHoldAchieve(checked: boolean) {
	return { type: A.SET_HOLD_ACHIEVE, payload: checked };
}

export function setDestroyAchieve(checked: boolean) {
	return { type: A.SET_DESTROY_ACHIEVE, payload: checked };
}
*/
// ***

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
