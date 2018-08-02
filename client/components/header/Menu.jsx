// @flow

import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Routes from "../../Routes";

// import styles from "../sass/blocks/main-nav.scss";

// to - объект, поскольку иначе не работает переключение активного стиля

const Menu = (props: {}) => (
	<ul className="main-nav__list" role="navigation">
		{Routes[0].routes.filter(route => route.inMenu).map(route => (
			<li className="main-nav__item" key={route.path}>
				<NavLink
					to={{ pathname: route.path }}
					className="main-nav__link"
					activeClassName="main-nav__link--active"
					aria-label={`${route.title}`}
				>
					<span>{route.title}</span>
				</NavLink>
			</li>
		))}
		{/* Демонстрация перехода на несуществующую страницу */}
		<li className="main-nav__item">
			<NavLink
				to={{ pathname: "/some_not_existing_page" }}
				className="main-nav__link"
				activeClassName="main-nav__link--active"
				aria-label="тут еще"
			>
				<span>Тут еще</span>
			</NavLink>
		</li>
	</ul>
);

export default Menu;

/*


		<li className="main-nav__item">
			<NavLink
				to={{ pathname: '/photo' }}
				className="main-nav__link"
				activeClassName="main-nav__link--active"
			>
				<span>Фотографии</span>
			</NavLink>
		</li>
		<li className="main-nav__item">
			<NavLink
				to={{ pathname: '/tour' }}
				className="main-nav__link"
				activeClassName="main-nav__link--active"
			>
				<span>Конкурс</span>
			</NavLink>
		</li>
		<li className="main-nav__item">
			<NavLink
				to={{ pathname: '/about' }}
				className="main-nav__link"
				activeClassName="main-nav__link--active"
			>
				<span>О проекте</span>
			</NavLink>
		</li>
		<li className="main-nav__item">
			<NavLink
				to={{ pathname: '/some_not_existing_page' }}
				className="main-nav__link"
				activeClassName="main-nav__link--active"
			>
				<span>Тут еще</span>
			</NavLink>
		</li>

*/
