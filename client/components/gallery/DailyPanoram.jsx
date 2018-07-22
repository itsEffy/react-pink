// @flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";

import PanoramPicture from "./PanoramPicture.jsx";
import AboutPhoto from "./AboutPhoto.jsx";
import { URL } from "../other/constants";
import {
	loadPanoramData,
	likePanoram
} from "../../actions/galleryActionCreators";

// import styles from "../sass/blocks/gallery/daily-panoram.scss";

type Props = {
	aboutData: AboutPhotoData,
	loadPanoramData: Function,
	likePanoram: Function
};

type State = {
	aboutData: null | AboutPhotoData
};

// Панорама - единственная картинка, которую сервер должен обновлять каждый день

class DailyPanoram extends PureComponent<Props, State> {
	/*
	state = {
		loadingStatus: ""
	};
	*/

	// лучше сделать разный статус загрузки. пока упрощенно
	componentDidMount() {
		this.props.loadPanoramData();
	}

	onLikeHandler = (liked: boolean) => {
		console.log("onLikeHandler", liked);
		this.props.likePanoram(liked);
	};

	render() {
		console.log(this.props.aboutData);
		return (
			<section className="panoram">
				<PanoramPicture />
				<div className="panoram__inner">
					<AboutPhoto
						data={this.props.aboutData}
						containerClassName="panoram__about"
						onLikeHandler={this.onLikeHandler}
						wide
					/>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	aboutData: state.panoram
});

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
	loadPanoramData() {
		dispatch(loadPanoramData());
	},

	likePanoram(liked: boolean) {
		dispatch(likePanoram(liked));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DailyPanoram);
