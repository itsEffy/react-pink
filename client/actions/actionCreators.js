// @flow

import * as A from "./actions";

export function setViewportVersion(viewportVersion: ViewportVersionType) {
	return { type: A.SET_VIEWPORT_VERSION, payload: viewportVersion };
}

export const fetchReviews = () => async (dispatch, getState, api) => {
	try {
		const res = await api.get("/reviews");

		return dispatch({
			type: A.FETCH_REVIEWS,
			payload: res.data
		});
	} catch (err) {
		// пытаемся все равно вычленить ответ
		if (err.response) {
			return dispatch({
				type: A.FETCH_REVIEWS,
				payload: err.response.data
			});
		}
		return dispatch({
			type: A.FETCH_REVIEWS,
			payload: false
		});
	}
};
