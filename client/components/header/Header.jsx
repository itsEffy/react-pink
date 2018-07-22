// @flow

import React, { Component } from "react";
// NavLink здесь негде использовать
import { NavLink, Link } from "react-router-dom";
import Logo from "../other/Logo.jsx";
import Menu from "./Menu.jsx";

// import headerS from "../sass/blocks/page-header.scss";
// import mainNavS from "../sass/blocks/main-nav.scss";
// import logoS from "../sass/blocks/main-logo.scss";

type State = {
	allowJS: boolean
};

type Props = {};

// TODO перенести в отдельный модуль?
const Toggler = () => (
	<React.Fragment>
		<input
			type="checkbox"
			className="main-nav__toggler-element"
			id="mainNavToggler"
		/>
		<label className="main-nav__toggler-label" htmlFor="mainNavToggler">
			<span className="main-nav__toggler-indicator" />
		</label>
		<div className="main-nav__panel" />
	</React.Fragment>
);

class Header extends Component<Props, State> {
	state = {
		allowJS: false
	};

	render() {
		return (
			<header
				className={` page-header page-header${
					this.state.allowJS ? "" : ""
				} `}
			>
				<nav className="page-header__inner main-nav">
					<Link
						to={{ pathname: "/" }}
						className="main-nav__logo white-logo"
						title="Pink"
					>
						PINK<Logo />
					</Link>
					{/* Обязательно должен быть перед меню */}
					<Toggler />
					<Menu />
				</nav>
			</header>
		);
	}
}

export default Header;
