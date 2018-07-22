// @flow

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../other/Logo.jsx";

// import styles from "../sass/blocks/page-footer.scss";
// import logoS from '../sass/blocks/main-logo.scss';

const Footer = (props: {}) => (
  <footer className="page-footer">
    <div className="page-footer__inner">
      <Link
        to={{ pathname: "/" }}
        className="page-footer__logo black-logo"
        title="Pink"
      >
        <Logo type="footer" />
      </Link>
      <div className="page-footer__social">
        <a
          href="https://twitter.com/?lang=ru"
          className="page-footer__social-item--twitter page-footer__social-item"
        >
          <svg width="20" height="16">
            <use xlinkHref="img/svg/sprite.svg#twitter-icon" />
          </svg>
          Мы в Twitter
        </a>
        <a
          href="https://www.facebook.com"
          className="page-footer__social-item--facebook page-footer__social-item"
        >
          <svg width="16" height="18">
            <use xlinkHref="img/svg/sprite.svg#facebook-icon" />
          </svg>
          Мы в Facebook
        </a>
        <a
          href="https://www.youtube.com"
          className="page-footer__social-item--youtube page-footer__social-item"
        >
          <svg width="15" height="13">
            <use xlinkHref="img/svg/sprite.svg#youtube-icon" />
          </svg>
          Мы в YouTube
        </a>
      </div>
      <div className="page-footer__copyright">
        Дизайн
        <a
          href="https://htmlacademy.ru"
          className="page-footer__copyright-link"
        >
          <svg width="28" height="35">
            <use xlinkHref="img/svg/sprite.svg#academy-logo" />
          </svg>
          HTML Academy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
