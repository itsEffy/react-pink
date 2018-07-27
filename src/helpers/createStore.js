import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { API_URL } from "./constants";
import reducers from "../../client/reducers/reducers";

export default req => {
	const axiosInstance = axios.create({
		baseURL: `${API_URL}`,
		headers: { cookie: req.get("cookie") || "" },
		timeout: 1000
	});

	// создаем хранилище как на клиенте
	const store = createStore(
		reducers,
		{},
		applyMiddleware(thunk.withExtraArgument(axiosInstance))
	);

	return store;
};
