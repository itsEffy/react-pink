// стартовая точка для клиентской версии приложения
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import store from "./store/store.jsx";
import Routes from "./Routes";
import reducers from "./reducers/reducers";

// вспомогательные listeners
import WindowViewportListener from "./components/other/WindowViewportListener.jsx";
import watchForHover from "./utils/watchForHover";

// пока что импортируем вообще все стили
import "./sass/styles.scss";

ReactDOM.hydrate(
	<Provider store={store}>
		<div>
			<BrowserRouter>
				<div>{renderRoutes(Routes)}</div>
			</BrowserRouter>
			<WindowViewportListener />
		</div>
	</Provider>,
	document.querySelector("#root")
);

console.log("привет, клиентское приложение доехало!");

// повесим правильный класс на body
// watchForHover();

// отключает вспомогательный код, если он присутствует на странице
const disableHelpers = () => {
	try {
		console.log("пытаюсь отключить");
		window.disableWatchingForm();
	} catch (err) {
		console.log("не удалось отключить ", err);
		return undefined;
	}
};

// !! safari
disableHelpers();
