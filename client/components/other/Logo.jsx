// @flow

import React from "react";
// import { connect } from "react-redux";

// import styles from '../sass/blocks/main-logo.scss';

type Props = {
  viewportVersion: ViewportVersionType,
  type?: string
};

// на мобильном футер отображается по-другому, поэтому логика отображения такая сложная
const Logo = ({ type }: Props) => {
  const template = (
    <svg
      width="100%"
      viewBox="0 0 147 41"
      className={type === "footer" ? "footer" : ""}
    >
      <use
        className={`mobile glasses ${type === "footer" ? "dark" : "light"}`}
        xlinkHref={`/img/svg/logo.svg#logo-${
          type === "footer" ? "tablet-base" : "mobile"
        }`}
      />
      {type === "footer" ? (
        <use
          className={`mobile text ${type === "footer" ? "dark" : "light"}`}
          xlinkHref="/img/svg/logo.svg#logo-tablet-text"
        />
      ) : null}

      <use
        className={`tablet glasses ${type === "footer" ? "dark" : "light"}`}
        xlinkHref="/img/svg/logo.svg#logo-tablet-base"
      />
      <use
        className={`tablet text ${type === "footer" ? "dark" : "light"}`}
        xlinkHref="/img/svg/logo.svg#logo-tablet-text"
      />
      <use
        className={`desktop stars stars--glasses ${
          type === "footer" ? "dark" : "light"
        }}`}
        xlinkHref="img/svg/logo.svg#logo-desktop-glasses-stars"
      />
      <use
        className={`desktop stars stars--text ${
          type === "footer" ? "dark" : "light"
        }}`}
        xlinkHref="img/svg/logo.svg#logo-desktop-text-star"
      />
      <use
        className={`desktop glasses ${type === "footer" ? "dark" : "light"}`}
        xlinkHref="img/svg/logo.svg#logo-desktop-base"
      />
      <use
        className={`desktop text ${type === "footer" ? "dark" : "light"}`}
        xlinkHref="img/svg/logo.svg#logo-desktop-text"
      />
    </svg>
  );
  return template;
};

const mapStateToProps = ({ viewportVersion }) => ({ viewportVersion });

export default Logo;
