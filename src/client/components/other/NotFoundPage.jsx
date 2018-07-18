// @flow

import React from "react";
import { Helmet } from "react-helmet";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import styles from "../sass/blocks/not-found.scss";

const FourOuFour = (props: {}) => (
	<div className={styles["not-found"]}>
		<Helmet>
			<title>Pink | Страница не найдена!</title>
		</Helmet>
		<Header className="header" />
		<main>
			<section className={styles["not-found__inner"]}>
				<p className={styles["not-found__number"]}>404</p>
				<p className={styles["not-found__description"]}>
					Кажется, вы немного не туда попали
				</p>
			</section>
		</main>
	</div>
);

export default FourOuFour;
