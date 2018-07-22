// @flow
import axios from "axios";
import { URL } from "../components/other/constants";

// Данная функция преобразовывает данные формы в формат multipart/form-data
const getMultipartFormData = (form: HTMLFormElement) => {
	const formData = new FormData(form);
	let element;
	for (let i = 0; i < form.elements.length; i += 1) {
		element = form.elements[i];
		if (element.name) {
			formData.append(element.name, element.value);
		}
	}
	return formData;
};

// Настоящая функция отправки данных на сервер, для демонстрации
// Никаких post-запросов не реализовано из сображений безопасности!
export const postFormDataX = (
	form: HTMLFormElement,
	url: string,
	successCb: Function,
	failureCb: Function
) => {
	const formData = getMultipartFormData(form);
	console.log(formData);
	axios
		.post(url, formData)
		.then(response => successCb(response))
		.catch(error => failureCb(error));
};

// Фейковая функция возвращает промис, всегда успешно разрезолвленный

const networkDelay = 2500;

export const postFormData = (
	form: HTMLFormElement,
	url: string,
	successCb: Function,
	failureCb: Function
) => {
	const fakeResponse = { status: 201 };
	const getFakeResponse = () =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(fakeResponse);
			}, networkDelay);
		});
	const request = getFakeResponse();
	request.then(response => successCb(response)).catch(() => {
		console.log("перепроверь код");
	});
};
