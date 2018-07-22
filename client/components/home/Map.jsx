// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';

import GoogleMap from './GoogleMap.jsx';

// import styles from "../sass/blocks/home/map.scss";

type Props = {};
type State = { error: ?Error, showMap: boolean };

class AdressMap extends PureComponent<Props, State> {
	state = {
		error: null,
		showMap: false
	};
	componentDidCatch = (error: Error, info: any) => {
		console.log(error, info);
		this.setState({ error });
	};

	componentDidMount() {
		this.setState({
			showMap: true
		});
	}
	render() {
		const { error, showMap } = this.state;
		if (error || !showMap) {
			return (
				<div
					className="map__container"
					style={{ padding: '150px 40px' }}
				>
					<div
						style={{
							fontSize: '40px',
							margin: '0 auto',
							textAlign: 'center',
							color: 'pink'
						}}
					/>
				</div>
			);
		}
		return <GoogleMap isMarkerShown />;
	}
}

export default AdressMap;
