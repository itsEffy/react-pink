// @flow
import axios from "axios";
import { URL } from "../extra/constants";

import * as A from "./actions";

// данная функция добавляет данные в store
function addPanoramData(panoram: AboutPhotoData) {
	return { type: A.ADD_PANORAM, payload: panoram };
}

export function addGalleryData(photos: Array<AboutPhotoData>) {
	return { type: A.ADD_PHOTOS, payload: photos };
}

/*
export function clearGalleryData() {
	return { type: A.CLEAR_GALLERY };
}
*/

function confirmLike(id: string, liked: boolean) {
	return { type: A.LIKE_PHOTO, payload: { id, liked } };
}

function confirmPanoramLike(liked: boolean) {
	return { type: A.LIKE_PANORAM, payload: liked };
}

// данная функция загружает данные с сервера

export function loadPanoramData() {
	return (dispatch: Function) => {
		axios
			.get(`${URL}/panoram`)
			.then(response => {
				dispatch(addPanoramData(response.data));
			})
			.catch(error => {
				console.error("axios error", error); // eslint-disable-line no-console
			});
	};
}

export function loadGalleryData(section: number, amount: number) {
	return (dispatch: Function) => {
		axios
			.get(`${URL}/photos?_start=${section}& _end=${section + amount}`)
			.then(response => {
				dispatch(addGalleryData(response.data));
			})
			.catch(error => {
				console.error("axios error", error); // eslint-disable-line no-console
			});
	};
}

// упрощенная, фейковая функция лайка - для того, чтобы поставить лайк по-настоящему,
// нужно было бы регистрироваться и отправлять на сервер данные.
// любые модифицирующие запросы убраны из соображений безопасности
// также необходимо было бы обработать ответ и отозвать лайк, если сервер его не подтвердил.

const networkDelay = 1500;

export function likePhoto(id: string, liked: boolean) {
	return (dispatch: Function) => {
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
}

export function likePanoram(liked: boolean) {
	return (dispatch: Function) => {
		const fakeResponse = { status: 201 };
		const getFakeResponse = () =>
			new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(fakeResponse);
				}, 20);
			});
		const request = getFakeResponse();
		request
			.then(response => dispatch(confirmPanoramLike(liked)))
			.catch(() => {
				console.log("перепроверь код");
			});
	};
}
