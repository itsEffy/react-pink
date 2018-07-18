// x@flow

// позволяет использовать async/await
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from '../client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('client/public'));

app.get('*', (req, res) => {
	console.log('запрос ресурса ', req.url);

	const context = {};

	const store = createStore(req);

	// вызываем функцию, проверяющую список нужных компонентов до вызова рендеринга. Извлекаем свойство route у каждого такого объекта, если оно есть. Возвращаем массив промизов- диспетчингов хранилища
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});

	Promise.all(promises).then(() => {
		// создаем пустой контекст перед рендерингом
		const context = {};

		// затем, когда все начальные данные подгружены, с созданным хранилищем и вызываем renderer, передав ему также контекст
		const content = renderer(req, store, context);

		// проверка на наличие редиректа
		if (context.url) {
			console.log('доступ невозможен, перенаправляю');
			return res.redirect(301, context.url);
		}

		// проверка на несуществующую страницу
		if (context.notFound) {
			res.status(404);
		}

		res.send(content);
	});
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
	console.log('listening on', PORT);
});
