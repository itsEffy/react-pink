// @flow

import React from "react";
import { Helmet } from "react-helmet";

import Description from "../other/Description.jsx";
import DailyPanoram from "./DailyPanoram.jsx";
import Gallery from "./Gallery.jsx";
import PhotoFilter from "./PhotoFilter.jsx";

import { fetchPanoram } from "../../actions/galleryActionCreators";

import PageTemplate from "../other/PageTemplate.jsx";

type Props = {
	route: {
		pageTitle: string
	}
};

const GalleryPage = ({ route: { pageTitle } }: Props) => (
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
			<p>Ниже вы можете заценить некоторые фильтры приложения</p>
		</Description>
		<PhotoFilter />
	</PageTemplate>
);

const loadData = store => store.dispatch(fetchPanoram());

export default { component: GalleryPage, loadData };

/*



*/
