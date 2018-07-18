// @flow

import React, { PureComponent } from "react";
import type { Node } from "react";

import GoogleMap from "./GoogleMap";

import styles from "../sass/blocks/home/map.scss";

type Props = {};
type State = { error: ?Error };

class AdressMap extends PureComponent<Props, State> {
	state = {
		error: null
	};
	componentDidCatch = (error: Error, info: any) => {
		console.log(error, info);
		this.setState({ error });
	};
	render() {
		if (this.state.error) {
			return (
				<div
					className={styles["map__container"]}
					style={{ padding: "150px 40px" }}
				>
					<div
						style={{
							fontSize: "40px",
							margin: "0 auto",
							textAlign: "center",
							color: "pink"
						}}
					>
						Oops!! fallback image map must be here
					</div>
				</div>
			);
		}
		return <GoogleMap isMarkerShown />;
	}
}

export default AdressMap;
