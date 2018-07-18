// @flow

import React from "react";

import PageTemplate from "../extra/PageTemplate";

import Features from "./Features";
import Reviews from "./Reviews";
import Price from "./Price";
import Contacts from "./Contacts";
import AdressMap from "./Map";

const HomePage = (props: {}) => (
	<PageTemplate home>
		<Features />
		<Reviews />
		<Price />
		<Contacts />
		<AdressMap />
	</PageTemplate>
);

export default HomePage;
