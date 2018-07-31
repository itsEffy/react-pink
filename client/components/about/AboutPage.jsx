// @flow

import React from "react";
import { Helmet } from "react-helmet";

import Description from "../other/Description.jsx";
import AboutContent from "./AboutContent.jsx";

import PageTemplate from "../other/PageTemplate.jsx";

type Props = {
	route: {
		pageTitle: string
	}
};

const AboutPage = ({ route: { pageTitle } }: Props) => (
	<PageTemplate pageTitle={pageTitle}>
		<Description>
			<p>
				Небольшой проект Pink создан с помощью React, использует Redux в
				качестве хранилища и главное - он{" "}
				<abbr
					title="за исключением reviews слайдера"
					className="about__abbr"
				>
					полностью
				</abbr>{" "}
				рендерится на сервере (проверьте поведение и фолбэки, отключив
				JS)
			</p>
			{null}
		</Description>
		<AboutContent />
	</PageTemplate>
);

export default { component: AboutPage };
