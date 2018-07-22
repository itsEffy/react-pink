// @flow

import React from "react";

import PageTemplate from "../other/PageTemplate.jsx";
import { fetchReviews } from "../../actions/actionCreators";

import Features from "./Features.jsx";
import Reviews from "./Reviews.jsx";
import Price from "./Price.jsx";
import Contacts from "./Contacts.jsx";
import AdressMap from "./Map.jsx";

const HomePage = (props: {}) => (
	<PageTemplate home>
		<Features />
		<Reviews />
		<Price />
		<Contacts />
		<AdressMap />;
	</PageTemplate>
);

const loadData = store => store.dispatch(fetchReviews());

export default { component: HomePage, loadData };
