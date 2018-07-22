// @flow

import React, { Component } from 'react';
// import styles from "../sass/blocks/home/effect.scss";

const Effect = (props: { containerClassName: string }) => (
	<div className={`effect ${props.containerClassName}`}>
		<b className="effect__title">Эффект на&nbsp;24&nbsp;часа!</b>
		<p className="effect__description">
			Британские ученые провели исследования и&nbsp;доказали, что
			положительный эффект от&nbsp;использования приложения длится целые
			сутки!
		</p>
		<a className="effect__link" href="#">
			Узнать больше об исследовании
		</a>
	</div>
);

export default Effect;
