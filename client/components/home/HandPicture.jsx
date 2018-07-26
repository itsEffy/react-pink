// @flow

import React from "react";

// В некоторых местах намеренно используется более качественная версия

const HandPicture = (props: {}) => (
	<picture>
		<source
			type="image/webp"
			media="(min-width: 980px)"
			srcSet="img/index/iphone-hand-desktop.webp 1x, img/index/iphone-hand-desktop@2x.webp 2x"
		/>

		<source
			type="image/webp"
			media="(min-width: 660px)"
			srcSet="img/index/iphone-hand-tablet.webp 1x, img/index/iphone-hand-tablet@2x.webp 2x"
		/>

		<source
			media="(min-width: 660px)"
			srcSet="img/index/iphone-hand-tablet.png 1x, img/index/iphone-hand-tablet@2x.png 2x"
		/>

		<source
			type="image/webp"
			media="(min-width: 320px)"
			srcSet="img/index/80-iphone-hand-mobile@2x.webp 1x, img/index/90-iphone-hand-mobile@2x.webp 2x"
		/>
		<source
			media="(min-width: 320px)"
			srcSet="img/index/iphone-hand-mobile@2x.png 2x"
		/>
		<img
			src="/img/index/iphone-hand-tablet@2x.png"
			width="100%"
			alt="Фото руки"
		/>
	</picture>
);

export default HandPicture;
