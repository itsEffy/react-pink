// @flow

import { combineReducers } from 'redux';
import * as A from '../actions/actions';
import {
	surname,
	name,
	patronymic,
	appOptions,
	tel,
	email,
	emotions,
	achieves
} from './form-reducers.jsx';

/*
const userInfo = (state = null, action: Action) => {
	if (action.type === SHOW_USER_INFO) {
		return action.payload;
	}
	return state;
};

const userInfoLoadingStatus = (state = '', action: Action) => {
	if (action.type === SET_USER_INFO_LOADING_STATUS) {
		return action.payload;
	}
	return state;
};
*/

const panoram = (state = null, action: Action) => {
	switch (action.type) {
		case A.ADD_PANORAM:
			return { ...action.payload };
		case A.LIKE_PANORAM:
			return {
				...state,
				liked: action.payload,
				likes:
					action.payload === true ? state.likes + 1 : state.likes - 1
			};
		default:
			return state;
	}
};

const photo = (state = {}, action: Action) => {
	switch (action.type) {
		case A.LIKE_PHOTO:
			console.log(action.payload);
			return {
				...state,
				liked: action.payload.liked,
				likes:
					action.payload.liked === true
						? state.likes + 1
						: state.likes - 1
			};
		default:
			return state;
	}
};

const gallery = (state = [], action: Action) => {
	switch (action.type) {
		case A.ADD_PHOTOS:
			return [...state, ...action.payload];
		case A.LIKE_PHOTO:
			return state.map(ph => {
				if (ph.id === action.payload.id) {
					return photo(ph, action);
				}
				return ph;
			});
		default:
			return state;
	}
};

// сохраняет количество уже загруженных фотографий

const isMobileMenuOpened = (state = true, action: Action) => {
	if (action.type === A.OPEN_CLOSE_MOBILE_MENU) {
		return action.payload;
	}
	return state;
};

const viewportVersion = (state = 'mobile', action: Action) => {
	if (action.type === A.SET_VIEWPORT_VERSION) {
		return action.payload;
	}
	return state;
};

const SomeVariable = (state = 'initialized', action: Object) => {
	if (action.type === A.CHANGE_VAR) {
		return action.payload;
	}
	return state;
};

const rootReducer = combineReducers({
	isMobileMenuOpened,
	viewportVersion,
	SomeVariable,
	panoram,
	gallery,
	surname,
	name,
	patronymic,
	appOptions,
	tel,
	email,
	emotions,
	achieves
});

export default rootReducer;
