// @flow

import axios from "axios";
import {} from "./actionCreators";

// Поставим лимит на запрос
const httpClient = axios.create();
httpClient.defaults.timeout = 5000;

const URL = "localhost:8500";

export function truegetUserInfo(userName: string) {
	return (dispatch: Function) => {
		axios
			.get(`${URL}/user/${userName}`)
			.then(response => {})
			.catch(error => {});
	};
}

// Промис
const getResponse = param => new Promise((resolve, reject) => {});

// Создать асинхронное действие и разрезолвить в зависимости от результата
export function getUserInfo(userName: string) {
	return (dispatch: Function) => {
		getResponse(userName)
			.then(response => {})
			.catch(error => {
				console.log(error);
			});
	};
}
