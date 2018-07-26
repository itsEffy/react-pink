// @flow

import { combineReducers } from "redux";
import * as A from "../actions/actions";
import {
	surname,
	name,
	patronymic,
	appOptions,
	tel,
	email,
	emotions,
	achieves
} from "./form-reducers.jsx";

const panoram = (state = null, action: Action) => {
	switch (action.type) {
		case A.FETCH_PANORAM:
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

// редьюсер для обработки отдельного фото - для лайка
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

const galleryDefaultState = { photos: [], noMore: false };

const gallery = (state = galleryDefaultState, action: Action) => {
	switch (action.type) {
		case A.LIKE_PHOTO: {
			const newPhotos = state.photos.map(ph => {
				if (ph.id === action.payload.id) {
					return photo(ph, action);
				}
				return ph;
			});
			// вернуть объект с новыми данными о лайке,
			// информацию о наличии подгрузки оставить прежней
			return { photos: newPhotos, noMore: state.noMore };
		}
		case A.FETCH_PHOTOS:
			return action.payload;
		default:
			return state;
	}
};

// по умолчанию пусть будет мобильное устройство -
// с большой вероятностью именно до него бандл дольше будет доходить
const viewportVersion = (state = "mobile", action: Action) => {
	if (action.type === A.SET_VIEWPORT_VERSION) {
		return action.payload;
	}
	return state;
};

const reviews = (state: Reviews = null, action: Object) => {
	if (action.type === A.FETCH_REVIEWS) {
		return action.payload;
	}
	return state;
};

const rootReducer = combineReducers({
	viewportVersion,
	reviews,
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
