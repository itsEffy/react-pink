// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
// NavLink здесь негде использовать
import { NavLink, Link, withRouter } from "react-router-dom";
import Logo from "../extra/Logo";
import { openCloseMobileMenu } from "../actions/actionCreators";
import Menu from "./Menu";

import headerS from "../sass/blocks/page-header.scss";
import mainNavS from "../sass/blocks/main-nav.scss";
import logoS from "../sass/blocks/main-logo.scss";

type Props = {
	openCloseMobileMenu: Function,
	isMobileMenuOpened: boolean
};

class Header extends Component<Props> {
	componentDidMount() {
		this.props.openCloseMobileMenu(false);
	}

	// Функция-переключатель
	toggleMobileMenu = event => {
		this.props.openCloseMobileMenu(!this.props.isMobileMenuOpened);
	};

	render() {
		return (
			<header className={headerS["page-header"]}>
				<nav
					className={`${headerS["page-header__inner"]} ${
						mainNavS["main-nav"]
					} ${
						this.props.isMobileMenuOpened
							? mainNavS["main-nav--opened"]
							: ""
					}`}
				>
					<Link
						to={{ pathname: "/" }}
						className={`${mainNavS["main-nav__logo"]} ${
							logoS["white-logo"]
						}`}
						title="Pink"
					>
						PINK
						<Logo />
					</Link>
					<button
						type="button"
						onClick={this.toggleMobileMenu}
						className={mainNavS["main-nav__toggle"]}
					>
						<span>Открыть меню</span>
					</button>
					<Menu />
				</nav>
			</header>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	isMobileMenuOpened: state.isMobileMenuOpened
});

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
	// Функция-открытия/закрытия, которой нужен аргумент
	openCloseMobileMenu(isOpened) {
		dispatch(openCloseMobileMenu(isOpened));
	}
});
// ???
const mergeProps = (stateProps, dispatchProps, ownProps) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
