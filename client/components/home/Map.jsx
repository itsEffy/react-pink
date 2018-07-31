// @flow

import React, { PureComponent } from "react";
import type { Node } from "react";
import axios from "axios";

import GoogleMap from "./GoogleMap.jsx";

// import styles from "../sass/blocks/home/map.scss";

const echo = axios.create({
	timeout: 5000
});

type Props = {};
type State = { error: ?Error, showMap: boolean };

class AdressMap extends PureComponent<Props, State> {
	state = {
		error: null,
		showMap: false
	};
	componentDidCatch = (error: Error, info: any) => {
		this.setState({ error });
	};

	componentDidMount() {
		// проверка связи. Отобразить картинку, если с интернетом перебои
		echo.get("/echoapi")
			.then(() => {
				this.setState({
					showMap: true
				});
			})
			.catch(() => {
				console.log("нет связи с сервером");
			});
	}
	render() {
		const { error, showMap } = this.state;
		if (error || !showMap) {
			return (
				<div
					className="map__container"
					style={{ padding: "150px 40px" }}
				>
					<div
						style={{
							fontSize: "40px",
							margin: "0 auto",
							textAlign: "center",
							color: "pink"
						}}
					/>
				</div>
			);
		}
		return <GoogleMap isMarkerShown />;
	}
}

export default AdressMap;
