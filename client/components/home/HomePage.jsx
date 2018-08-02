// @flow

import React, { Component } from "react";

import PageTemplate from "../other/PageTemplate.jsx";
import { fetchReviews } from "../../actions/actionCreators";

import Features from "./Features.jsx";
import Reviews from "./Reviews.jsx";
import Price from "./Price.jsx";
import Contacts from "./Contacts.jsx";
import AdressMap from "./Map.jsx";

import ieSvgPatching from "../../utils/ieSvgPatching";

type Props = {};

class HomePage extends Component<Props> {
	componentDidMount() {
		ieSvgPatching();
	}

	render() {
		return (
			<PageTemplate home>
				<Features />
				<Reviews />
				<Price />
				<Contacts />
				<AdressMap />;
			</PageTemplate>
		);
	}
}

const loadData = store => store.dispatch(fetchReviews());

export default { component: HomePage, loadData };
