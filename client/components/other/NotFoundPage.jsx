// x@flow

import React from 'react';
import { Helmet } from 'react-helmet';

// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import styles from '../../sass/blocks/not-found.scss';

const Header = () => <h3>header</h3>;
const Footer = () => <h3>footer</h3>;

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;

	return (
		<div className="not-found">
			<Helmet>
				<title>Pink | Страница не найдена!</title>
			</Helmet>
			<Header className="header" />
			<main>
				<section className="not-found__inner">
					<p className="not-found__number">404</p>
					<p className="not-found__description">
						Кажется, вы немного не туда попали
					</p>
				</section>
			</main>
		</div>
	);
};

export default { component: NotFoundPage };
