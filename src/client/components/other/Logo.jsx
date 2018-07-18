// @flow

import React from 'react';
import { connect } from 'react-redux';

import styles from '../sass/blocks/main-logo.scss';

type Props = {
  viewportVersion: ViewportVersionType,
  type?: string
};

let template = null;
let viewport = '';

// попробовать stateful comp. сейчас браузер грузит лого заново каждый раз
// либо localStorage

// Отгрузить все лого, нужное отображение сделать с помощью css!

const Logo = ({ viewportVersion, type }: Props) => {
  viewport = viewportVersion;
  switch (viewport) {
    case 'mobile':
    default:
      template =
        type === 'footer' ? (
          <svg width="100%" viewBox="0 0 147 41">
            <use
              className={`${styles['glasses']}`}
              xlinkHref="/img/svg/logo.svg#logo-tablet-base"
            />
            <use
              className={`${styles['text']}`}
              xlinkHref="/img/svg/logo.svg#logo-tablet-text"
            />
          </svg>
        ) : (
          <svg width="100%" viewBox="0 0 147 41">
            <use
              className={styles['text']}
              xlinkHref="img/svg/logo.svg#logo-mobile"
            />
          </svg>
        );
      break;
    case 'tablet':
      template = (
        <svg width="100%" viewBox="0 0 147 41">
          <use
            className={`${styles['glasses']}`}
            xlinkHref="/img/svg/logo.svg#logo-tablet-base"
          />
          <use
            className={`${styles['text']}`}
            xlinkHref="/img/svg/logo.svg#logo-tablet-text"
          />
        </svg>
      );
      break;
    case 'desktop':
    case 'wide':
      template = (
        <svg width="100%" viewBox="0 0 147 41">
          <use
            className={`${styles['stars']} ${styles['stars--glasses']}`}
            xlinkHref="img/svg/logo.svg#logo-desktop-glasses-stars"
          />
          <use
            className={`${styles['stars']} ${styles['stars--text']}`}
            xlinkHref="img/svg/logo.svg#logo-desktop-text-star"
          />
          <use
            className={`${styles['glasses']}`}
            xlinkHref="img/svg/logo.svg#logo-desktop-base"
          />
          <use
            className={`${styles['text']}`}
            xlinkHref="img/svg/logo.svg#logo-desktop-text"
          />
        </svg>
      );
      break;
  }
  return template;
};

const mapStateToProps = (state, ownProps) => ({
  viewportVersion: state.viewportVersion
});

export default connect(mapStateToProps)(Logo);
