// @flow

import React from 'react';
// import styles from '../sass/blocks/home/download.scss';
// import buttonS from '../sass/blocks/btn.scss';

const Download = (props: { containerClassName: string }) => (
	<div className={`download ${props.containerClassName}`}>
		<p className="download__slogan">Взгляните на&nbsp;жизнь иначе!</p>
		<a
			className="download__button btn"
			href="https://itunes.apple.com/ru/app/instagram/id389801252?mt=8"
		>
			Скачать приложение
		</a>
		<div className="download__market-list">
			<a
				className="download__market download__market--appstore"
				href="https://itunes.apple.com/ru/app/instagram/id389801252?mt=8"
				title="AppStore"
			>
				<svg width="47" height="58">
					<use
						className="download__market-icon"
						xlinkHref="img/svg/home-sprite.svg#apple-icon"
					/>
				</svg>
				App Store
			</a>
			<a
				className="download__market download__market--google-play"
				href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=ru"
				title="PlayMarket"
			>
				<svg width="43" height="49">
					<use
						className="download__market-icon"
						xlinkHref="img/svg/home-sprite.svg#android-icon"
					/>
				</svg>
				Google Play
			</a>
			<a
				className="download__market download__market--windows-store"
				href="https://www.microsoft.com/ru-ru/store/p/instagram/9nblggh5l9xt"
				title="Windows Store"
			>
				<svg width="44" height="44">
					<use
						className="download__market-icon"
						xlinkHref="img/svg/home-sprite.svg#microsoft-icon"
					/>
				</svg>
				Windows Store
			</a>
		</div>
		<p className="download__availability-note">
			Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
		</p>
	</div>
);

export default Download;
