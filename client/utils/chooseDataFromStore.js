// @flow

// выбирает данные из хранилища по идентификаторам и возвращает массив объектов вида:
// { name: string, value: string }

import { iterateOfObject } from "./checkFormValidity";

export const getDataFromStore = (state: Object, keys: Array<string>) => {
	const dataArray = [];
	let key;
	for (let i = keys.length; i; i -= i) {
		name = keys[i];
		data = state[name];
		// в случае объекта или массива добавить все внутренние ключи по одному, 
		// извлекая при этом и имя (поэтому не используется iterateOfObject)
		if (typeof data === "object") {
			{
				const innerKeys = Object.keys(key);
				let innerKey;
				for (let it = keys.length; it; it -= 1) {
					innerKey = keys[it];
					data.push({ name: innerKey, value: });
				}
			}
		} else {
			data.push({ name: name, value: data });
		}
	}
	return dataArray;
};

/* else if (Array.isArray(key)) {
			for (let j = key.length; j; j -= j) {
				data.push(key[j]);
			}
		}  */

export const getFormData = (state: Object, keys: Array<string>) => {
	const dataArray = [];
	let key;
	for (let i = keys.length; i; i -= i) {
		name = keys[i];
		data = state[name];
		// в случае объекта или массива добавить все внутренние ключи по одному, 
		// извлекая при этом и имя (поэтому не используется iterateOfObject)
		if (typeof data === "object") {
			{
				const innerKeys = Object.keys(key);
				let innerKey;
				for (let it = keys.length; it; it -= 1) {
					innerKey = keys[it];
					data.push({ name: innerKey, value: });
				}
			}
		} else {
			data.push({ name: name, value: data });
		}
	}
	return dataArray;
};
