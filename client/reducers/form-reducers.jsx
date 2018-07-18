// @flow

import * as A from "../actions/actions";

const EMPTY_STRING = "";

export const surname = (state: string = EMPTY_STRING, action: Action) => {
	switch (action.type) {
		case A.SET_SURNAME_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return EMPTY_STRING;

		default:
			return state;
	}
};

export const name = (state: string = EMPTY_STRING, action: Action) => {
	switch (action.type) {
		case A.SET_NAME_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return EMPTY_STRING;

		default:
			return state;
	}
};

export const patronymic = (state: string = EMPTY_STRING, action: Action) => {
	switch (action.type) {
		case A.SET_PATRONYMIC_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return EMPTY_STRING;

		default:
			return state;
	}
};

const defaultApp = "android";

export const appOptions = (
	state: "android" | "ios" | "windows" = defaultApp,
	action: Action
) => {
	switch (action.type) {
		case A.SET_APPOPTIONS_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return defaultApp;

		default:
			return state;
	}
};

export const tel = (state: string = EMPTY_STRING, action: Action) => {
	switch (action.type) {
		case A.SET_TEL_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return EMPTY_STRING;

		default:
			return state;
	}
};

export const email = (state: string = EMPTY_STRING, action: Action) => {
	switch (action.type) {
		case A.SET_EMAIL_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return EMPTY_STRING;

		default:
			return state;
	}
};

export const emotions = (state: string = EMPTY_STRING, action: Action) => {
	switch (action.type) {
		case A.SET_EMOTIONS_VALUE:
			return action.payload;

		case A.RESET_FORM:
			return EMPTY_STRING;

		default:
			return state;
	}
};

const defaultAchieves = {
	selfie: false,
	burnt: true,
	sawseleb: false,
	souvenirs: true,
	hold: false,
	destroy: false
};

export const achieves = (state: Object = defaultAchieves, action: Action) => {
	switch (action.type) {
		case A.SET_ACHIEVE: {
			const { value, checked } = action.payload;
			const newState = { ...state, [value]: checked };
			return newState;
		}

		case A.RESET_FORM:
			return defaultAchieves;

		default:
			return state;
	}
};

/*
export const achieves = (
	state = {
		selfie: false,
		burnt: true,
		sawseleb: false,
		souvenirs: true,
		hold: false,
		destroy: false
	},
	action: Action
) => {
	switch (action.type) {
		case A.SET_SELFIE_ACHIEVE:
			return { ...state, selfie: action.payload };
		case A.SET_BURNT_ACHIEVE:
			return { ...state, burnt: action.payload };
		case A.SET_DESTROY_ACHIEVE:
			return { ...state, destroy: action.payload };
		case A.SET_SAWSELEB_ACHIEVE:
			return { ...state, sawseleb: action.payload };
		case A.SET_SOUVENIRS_ACHIEVE:
			return { ...state, souvenirs: action.payload };
		case A.SET_HOLD_ACHIEVE:
			return { ...state, hold: action.payload };
		default:
			return state;
	}
};

*/
