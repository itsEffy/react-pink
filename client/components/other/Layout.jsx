// @flow

import React from 'react';
import type { Node } from 'react';

import { Helmet } from 'react-helmet';

import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

// import ParallaxS from "../sass/blocks/parallax.scss";
import { ParallaxStatic } from './Parallax.jsx';

// Данный шаблон используется всеми страницами (пока кроме 404)

const Layout = (props: { children: Node }) => (
	<div className="parallax-page" id="parallax">
		<Header />
		{props.children}
		<ParallaxStatic>
			<Footer />
		</ParallaxStatic>
	</div>
);

export default Layout;
