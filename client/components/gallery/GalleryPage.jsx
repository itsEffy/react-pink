// @flow

import React from "react";
import { Helmet } from "react-helmet";

import Description from "../extra/Description";
import DailyPanoram from "./DailyPanoram";
import Gallery from "./Gallery";
import PhotoFilter from "./PhotoFilter";

import PageTemplate from "../extra/PageTemplate";

const GalleryPage = (props: { pageTitle: string }) => (
	<PageTemplate pageTitle={props.pageTitle}>
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

export default GalleryPage;
