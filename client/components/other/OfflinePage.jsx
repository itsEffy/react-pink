// x@flow

import React from "react";
import { Helmet } from "react-helmet";

import Header from "../header/Header.jsx";

const Footer = () => <h3>footer</h3>;

const OfflinePage = () => {
	return (
		<div className="not-found">
			<Helmet>
				<title>Pink | Оффлайн</title>
			</Helmet>
			<main>
				<section className="not-found__inner">
					<p className="not-found__description  not-found__description--small">
						Кажется, ваше интернет-соединение на текущий момент не
						очень, либо heroku сейчас недоступен.
					</p>
					<p className="not-found__description  not-found__description--small">
						Обновите страницу либо повторите попытку позже
					</p>
				</section>
			</main>
		</div>
	);
};

export default { component: OfflinePage };
