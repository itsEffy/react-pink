// @flow

import * as A from "./actions";

export function openCloseMobileMenu(isOpened: boolean) {
	return { type: A.OPEN_CLOSE_MOBILE_MENU, payload: isOpened };
}

export function setViewportVersion(viewportVersion: ViewportVersionType) {
	return { type: A.SET_VIEWPORT_VERSION, payload: viewportVersion };
}

export function changeVariable(variable: string) {
	return { type: A.CHANGE_VAR, payload: variable };
}
