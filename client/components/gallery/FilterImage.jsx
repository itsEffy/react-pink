// @flow

import React, { PureComponent } from "react";

import { URL } from "../other/constants";

// import styles from "../sass/blocks/gallery/filter.scss";

type State = {
	loaded: boolean
};

type Props = {
	contrast: number,
	color: number,
	blur: number
};

class FilterImage extends PureComponent<Props, State> {
	state = {
		loaded: false
	};
	render() {
		const { loaded } = this.state;
		const { contrast, color, blur } = this.props;
		return (
			<section className="filter__image-container">
				<img
					className="filter__basic-image"
					src="/img/gallery/filter-2.jpg"
					alt="Фото по умолчанию здесь"
					width="100%"
					style={{
						width: "100%",
						height: "100%",
						filter: `saturate(${contrast}) blur(${blur}px) hue-rotate(${color}deg)`
					}}
				/>
			</section>
		);
	}
}

/* 
<div
					className={styles["filter__image-item"]}
					style={{
						backgroundImage: `url("${
							loaded ? "" : "/img/gallery/filter-2.jpg"
						}")`,
						backgroundSize: "cover",
						width: "100%",
						height: "100%",
						filter: `saturate(${contrast}) blur(${blur}px) hue-rotate(${color}deg)`
					}}
				/>
				*/

export default FilterImage;
