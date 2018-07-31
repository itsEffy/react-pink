// @flow
import axios from "axios";
import { URL } from "../components/other/constants";

import * as A from "./actions";

// данная функция добавляет данные в store

function confirmLike(id: string, liked: boolean) {
	return { type: A.LIKE_PHOTO, payload: { id, liked } };
}

function confirmPanoramLike(liked: boolean) {
	return { type: A.LIKE_PANORAM, payload: liked };
}

// упрощенная, фейковая функция лайка - для того, чтобы поставить лайк по-настоящему,
// нужно было бы регистрироваться и отправлять на сервер данные.
// любые модифицирующие запросы убраны из соображений безопасности
// также необходимо было бы обработать ответ и отозвать лайк, если сервер его не подтвердил.

const networkDelay = 1500;

export const likePhoto = (id: string, liked: boolean) => async dispatch => {
	const fakeResponse = { status: 201 };
	const getFakeResponse = () =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(fakeResponse);
			}, networkDelay);
		});
	const request = getFakeResponse();
	request.then(response => dispatch(confirmLike(id, liked))).catch(() => {
		console.log("перепроверь код");
	});
};

export const likePanoram = (liked: boolean) => async dispatch => {
	const fakeResponse = { status: 201 };
	const getFakeResponse = () =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(fakeResponse);
			}, 20);
		});
	const request = getFakeResponse();
	request.then(response => dispatch(confirmPanoramLike(liked))).catch(() => {
		console.log("перепроверь код");
	});
};

// рефактор async/await
// даные функции пытаются вычленить ответ даже в случае пришедшего статуса ошибки

export const fetchPanoram = () => async (dispatch, getState, api) => {
	try {
		const res = await api.get("/panoram");

		return dispatch({
			type: A.FETCH_PANORAM,
			payload: res.data
		});
	} catch (err) {
		console.log(err);
		if (err.response.data) {
			return dispatch({
				type: A.FETCH_PANORAM,
				payload: err.response.data
			});
		}
		return dispatch({
			type: A.FETCH_PANORAM,
			payload: false
		});
	}
};

export const fetchPhotos = (start = 0, end = 5) => async (
	dispatch,
	getState,
	api
) => {
	try {
		const res = await api.get("/photos?start=" + start + "&end=" + end);

		return dispatch({
			type: A.FETCH_PHOTOS,
			payload: res.data
		});
	} catch (err) {
		if (err.response.data) {
			return dispath({
				type: A.FETCH_PHOTOS,
				payload: err.response.data
			});
		}
		return dispatch({
			type: A.FETCH_PHOTOS,
			payload: false
		});
	}
};
