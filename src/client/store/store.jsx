// @flow

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducers";

import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = createStore(
	reducer,
	persistedState,
	compose(
		applyMiddleware(thunk),
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
