// @flow

import React from 'react';
import { Helmet } from 'react-helmet';

import Description from '../other/Description.jsx';

import PageTemplate from '../other/PageTemplate.jsx';

type Props = {
	route: {
		pageTitle: string
	}
};

const AboutPage = ({ route: { pageTitle } }: Props) => (
	<PageTemplate pageTitle={pageTitle}>
		<Description>
			<p>
				{`Данный проект практически не задействует сторонних библиотек, за исключением слайдера и input type="range"`}
			</p>
			<p>{`От CSSModules пришлось отказаться`}</p>
		</Description>
	</PageTemplate>
);

export default { component: AboutPage };

/*

<DailyPanoram />
		<Gallery />
		<Description>
			<p>
				{`Затмите их\u00A0всех!\t Выкладывайте все, что накопилось в\u00A0телефоне с\u00A0приложением Pink!`}
			</p>
			<p>Ниже вы можете заценить некоторые фильтры приложения</p>
		</Description>
		<PhotoFilter />

*/
