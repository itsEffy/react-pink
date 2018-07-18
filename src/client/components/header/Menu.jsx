// @flow

import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import styles from "../sass/blocks/main-nav.scss";

// to - объект, поскольку иначе не работает переключение активного стиля

const Menu = (props: {}) => (
	<ul className={styles["main-nav__list"]}>
		<li className={styles["main-nav__item"]}>
			<NavLink
				to={{ pathname: "/photo" }}
				className={styles["main-nav__link"]}
				activeClassName={styles["main-nav__link--active"]}
			>
				<span>Фотографии</span>
			</NavLink>
		</li>
		<li className={styles["main-nav__item"]}>
			<NavLink
				to={{ pathname: "/tour" }}
				className={styles["main-nav__link"]}
				activeClassName={styles["main-nav__link--active"]}
			>
				<span>Конкурс</span>
			</NavLink>
		</li>
		<li className={styles["main-nav__item"]}>
			<NavLink
				to={{ pathname: "/about" }}
				className={styles["main-nav__link"]}
				activeClassName={styles["main-nav__link--active"]}
			>
				<span>О проекте</span>
			</NavLink>
		</li>
		<li className={styles["main-nav__item"]}>
			<NavLink
				to={{ pathname: "/some_not_existing_page" }}
				className={styles["main-nav__link"]}
				activeClassName={styles["main-nav__link--active"]}
			>
				<span>Тут еще</span>
			</NavLink>
		</li>
	</ul>
);

export default Menu;
