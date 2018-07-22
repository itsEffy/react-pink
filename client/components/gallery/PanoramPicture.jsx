// @flow

import React, { PureComponent } from "react";

// import styles from "../sass/blocks/gallery/daily-panoram.scss";

const label = "Панорама дня";

// намеренно отображается самая качественная картинка
const PanoramPicture = (props: {}) => (
	<div className="panoram__container">
		<picture>
			<source
				media="(min-width: 980px)"
				srcSet="/img/gallery/panorama-big-2.jpg 1x, /img/gallery/panorama-big-2.jpg 2x"
			/>

			<source srcSet="/img/gallery/panorama-small-1.jpg 1x, /img/gallery/panorama-small-2.jpg 2x" />

			<img
				src="/img/gallery/panorama-micro.jpg"
				width="100%"
				alt="Панорама дня"
			/>
		</picture>
		<div className="panoram__picture-inner">
			<h2 className="panoram__label">
				<span>{label.toUpperCase()}</span>
			</h2>
		</div>
	</div>
);

export default PanoramPicture;
