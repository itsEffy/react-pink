// @flow

import React, { PureComponent } from "react";

// import styles from "../sass/blocks/gallery/photo-item.scss";

type Props = { id: string, copyright?: string };

const PhotoPicture = ({ id, copyright }: Props) => (
	<div className="photo-item__container">
		<picture>
			<source
				media="(min-width: 350px)"
				srcSet={`/img/gallery/${id}-2.jpg 1x, /img/gallery/${id}-2.jpg 2x`}
			/>
			<img src={`/img/gallery/${id}-1.jpg`} width="100%" alt="Фото" />
		</picture>
		{copyright ? (
			<span className="photo-item__copyright">{copyright}</span>
		) : null}
	</div>
);

PhotoPicture.defaultProps = {
	copyright: undefined
};

export default PhotoPicture;
