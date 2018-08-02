// @flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";

import PanoramPicture from "./PanoramPicture.jsx";
import AboutPhoto from "./AboutPhoto.jsx";
import { URL } from "../other/constants";
import { fetchPanoram, likePanoram } from "../../actions/galleryActionCreators";

import ieSvgPatching from "../../utils/ieSvgPatching";

// import styles from "../sass/blocks/gallery/daily-panoram.scss";

type Props = {
	aboutData: AboutPhotoData,
	fetchPanoramData: Function,
	likePanoram: Function
};

type State = {
	aboutData: null | AboutPhotoData
};

// Панорама - единственная картинка, которую сервер должен обновлять каждый день

class DailyPanoram extends PureComponent<Props, State> {
	componentDidMount() {
		// проверка данных на сущетвование
		if (!this.props.aboutData) {
			this.props.fetchPanoramData();
		}
		ieSvgPatching();
	}

	componentDidUpdate() {
		ieSvgPatching();
	}

	onLikeHandler = (liked: boolean) => {
		this.props.likePanoram(liked);
	};

	render() {
		return (
			<article className="panoram">
				<PanoramPicture />
				<div className="panoram__inner">
					<AboutPhoto
						data={this.props.aboutData}
						containerClassName="panoram__about"
						onLikeHandler={this.onLikeHandler}
						wide
					/>
				</div>
			</article>
		);
	}
}

const mapStateToProps = ({ panoram }) => ({
	aboutData: panoram
});

const mapDispatchToProps = (dispatch: Function) => ({
	fetchPanoramData() {
		dispatch(fetchPanoram());
	},

	likePanoram(liked: boolean) {
		dispatch(likePanoram(liked));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DailyPanoram);
