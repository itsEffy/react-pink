// @flow

import React from 'react';
import type { Node } from 'react';

import { Helmet } from 'react-helmet';

// import Header from '../header/Header';
import PageTitle from '../other/PageTitle';
// import Promo from '../home/Promo';
// import Footer from '../footer/Footer';

import ParallaxS from '../sass/blocks/parallax.scss';
import { ParallaxActive, ParallaxStatic } from '../extra/Parallax';

const Header = () => <h3>header</h3>;
const Footer = () => <h3>footer</h3>;
const Promo = () => <h2>promo</h2>;

// Данный шаблон используется всеми страницами (кроме 404)

/* <ParallaxActive
			heightModifier={
				props.home ? "full" : `lines-${defineLines(props.pageTitle)}`
			}
		> */

// Возвращает количество строк текста. Необходимо для задания модификатора класса паралакс-блока. Т.к. его высота должна быть задана явно, единственный способ относительной динамичности и защиты от переполнения - использовать разные модификаторы для строк разной длины.

const defineLines = (text: string, maxLineLength: number = 23) => {
	/* const lineLength = 28; // желаемая длина одной строчки */
	const lineAmount = Math.ceil(text.length / maxLineLength);
	return lineAmount;
};

type Props = {
	pageTitle: string,
	home?: boolean,
	children: Node
};

const PageTemplate = ({ pageTitle, home, children }: Props) => (
	<main>
		<Helmet>
			<title>{home ? `Pink` : `Pink | ${pageTitle}`}</title>
		</Helmet>
		<ParallaxActive titleText={home ? 'none' : `${pageTitle}`}>
			{home ? <Promo /> : <PageTitle pageTitle={pageTitle} />}
		</ParallaxActive>
		<ParallaxStatic>{children}</ParallaxStatic>
	</main>
);

PageTemplate.defaultProps = {
	pageTitle: 'Pink',
	home: false
};

export default PageTemplate;
