// @flow

import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Description from "../other/Description.jsx";
import DailyPanoram from "./DailyPanoram.jsx";
import Gallery from "./Gallery.jsx";
import PhotoFilter from "./PhotoFilter.jsx";

import { fetchPanoram, fetchPhotos } from "../../actions/galleryActionCreators";

import PageTemplate from "../other/PageTemplate.jsx";

type Props = {
	route: {
		pageTitle: string
	}
};

type State = {};

/*
			<p>Ниже вы можете заценить некоторые фильтры приложения</p>
			*/

class GalleryPage extends Component<Props, State> {
	state = {};
	componentDidMount() {}

	render() {
		const { pageTitle } = this.props.route;
		return (
			<PageTemplate pageTitle={pageTitle}>
				<Description>
					<p>
						{`Взгляните на\u00A0фотографии, которые выкладывают пользователи!`}
					</p>
					<p>{`Видите, как не\u00A0хватает ваших?`}</p>
				</Description>
				<DailyPanoram />
				<Gallery />
				<Description>
					<p>
						{`Затмите их\u00A0всех!\t Выкладывайте все, что накопилось в\u00A0телефоне с\u00A0приложением Pink!`}
					</p>
				</Description>
			</PageTemplate>
		);
	}
}

// оборачиваем в "мультипромиз" для нескольких async actionCreators
const loadData = async ({ dispatch }) => {
	const res = await Promise.all([
		dispatch(fetchPanoram()),
		dispatch(fetchPhotos())
	]);
	return res;
};

export default { component: GalleryPage, loadData };
