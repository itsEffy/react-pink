// @flow

import React, { PureComponent } from "react";
import AboutPhoto from "./AboutPhoto";
import PhotoPicture from "./PhotoPicture";

import styles from "../sass/blocks/gallery/photo-item.scss";

type Props = {
	data: AboutPhotoData,
	onLikeHandler: Function,
	containerClassName: string
};

class PhotoItem extends PureComponent<Props> {
	static defaultProps = {
		containerClassName: ""
	};

	onThisPhotoLikeHandler = (liked: boolean) => {
		const { data, onLikeHandler } = this.props;
		onLikeHandler(data.id, liked);
	};

	render() {
		const { data, containerClassName } = this.props;
		return (
			<article
				className={`${styles["photo-item"]} ${containerClassName}`}
			>
				<PhotoPicture
					id={this.props.data.id}
					copyright={this.props.data.copyright}
				/>
				<AboutPhoto
					data={this.props.data}
					containerClassName={styles["photo-item__about"]}
					onLikeHandler={this.onThisPhotoLikeHandler}
				/>
			</article>
		);
	}
}

export default PhotoItem;
