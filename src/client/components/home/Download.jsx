// @flow

import React from 'react';
import styles from '../sass/blocks/home/download.scss';
import buttonS from '../sass/blocks/btn.scss';

// роутер не нужен, внешние ссылки на магазины приложений
const Download = (props: { containerClassName: string }) => (
	<div className={`${styles['download']}  ${props.containerClassName}`}>
		<p className={styles['download__slogan']}>Взгляните на&nbsp;жизнь иначе!</p>
		<a
			className={`${styles['download__button']} ${buttonS['btn']}`}
			href="https://itunes.apple.com/ru/app/instagram/id389801252?mt=8"
		>
			Скачать приложение
		</a>
		<div className={styles['download__market-list']}>
			<a
				className={`${styles['download__market']} ${styles['download__market--appstore']}`}
				href="https://itunes.apple.com/ru/app/instagram/id389801252?mt=8"
				title="AppStore"
			>
				<svg width="47" height="58">
					<use className={styles['download__market-icon']} xlinkHref="img/svg/home-sprite.svg#apple-icon" />
				</svg>
				App Store
			</a>
			<a
				className={`${styles['download__market']} ${styles['download__market--google-play']}`}
				href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=ru"
				title="PlayMarket"
			>
				<svg width="43" height="49">
					<use className={styles['download__market-icon']} xlinkHref="img/svg/home-sprite.svg#android-icon" />
				</svg>
				Google Play
			</a>
			<a
				className={`${styles['download__market']} ${styles['download__market--windows-store']}`}
				href="https://www.microsoft.com/ru-ru/store/p/instagram/9nblggh5l9xt"
				title="Windows Store"
			>
				<svg width="44" height="44">
					<use
						className={styles['download__market-icon']}
						xlinkHref="img/svg/home-sprite.svg#microsoft-icon"
					/>
				</svg>
				Windows Store
			</a>
		</div>
		<p className={styles['download__availability-note']}>
			Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
		</p>
	</div>
);

export default Download;
