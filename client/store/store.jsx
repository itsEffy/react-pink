// @flow

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducer from "../reducers/reducers";

import { iterateOfObject } from "../utils/utils.jsx";

import { loadState, saveState } from "./localStorage.jsx";

export const requestToApi = axios.create({
	baseURL: "/api"
});

const persistedState = loadState();

const initialClientState = { ...window.INITIAL_STATE, ...persistedState };

const mergeState = (first, second) => {
	let state = { ...first };
	if (typeof second === "object") {
		iterateOfObject(second, item => {
			if (item !== undefined || item !== null || item !== "") {
				state[item] = second[item];
			}
		});
	}

	return state;
};

const initialClientState2 = mergeState(window.INITIAL_STATE, persistedState);

console.log(
	"доехавшее состояние: ",
	window.INITIAL_STATE,
	"сохраненное в localStorage состояние: ",
	persistedState,
	"начальное состояние: ",
	initialClientState2
);

const store = createStore(
	reducer,
	initialClientState2,
	compose(
		applyMiddleware(thunk.withExtraArgument(requestToApi)),
		typeof window === "object" &&
		typeof window.devToolsExtension !== "undefined"
			? window.devToolsExtension()
			: f => f
	)
);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
