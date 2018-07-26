// @flow

import * as A from "./actions";

export function setViewportVersion(viewportVersion: ViewportVersionType) {
	return { type: A.SET_VIEWPORT_VERSION, payload: viewportVersion };
}

export function changeVariable(variable: string) {
	return { type: A.CHANGE_VAR, payload: variable };
}

export const xfetchReviews = () => async (dispatch, getState, api) => {
	try {
		const res = await api.get("/reviews");

		return dispatch({
			type: A.FETCH_REVIEWS,
			payload: res.data
		});
	} catch (err) {
		return dispatch({
			type: A.FETCH_REVIEWS,
			payload: null
		});
	}
};

export const fetchReviews = () => async (dispatch, getState, api) => {
	const res = await api.get("/reviews");

	return dispatch({
		type: A.FETCH_REVIEWS,
		payload: res.data
	});
};
