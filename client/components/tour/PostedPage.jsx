// @flow

import React from "react";
import { Helmet } from "react-helmet";

import PageTemplate from "../other/PageTemplate.jsx";
import FormPopup from "../form/FormPopup.jsx";

type Props = {
	route: {
		pageTitle: string
	}
};

// Данный компонент используется только при отключенном JS

const TourPage = ({ route: { pageTitle } }: Props) => (
	<PageTemplate pageTitle={pageTitle}>
		<FormPopup
			title="Ваша заявка отправлена"
			text="Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и оповестим вас."
			buttonType="link"
			fullPage
		/>
	</PageTemplate>
);

export default { component: TourPage };
