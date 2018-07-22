// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setViewportVersion } from '../../actions/actionCreators';

type Props = {
	viewportVersion: ViewportVersionType,
	setViewportVersion: Function
};

// TODO!! Обновить константы, не оставлять магических значений.
class WindowViewportListener extends Component<Props> {
	componentWillMount = () => {
		// console.log('устанавливаю начальный размер окна');
		this.updateWindowDimensions();
	};

	componentDidMount = () => {
		// console.log('Viewport Listener was created');
		window.addEventListener('resize', this.updateWindowDimensions);
	};

	// возможно, это и не нужно вообще. Береженого бог бережет
	shouldComponentUpdate = () => false;

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	};

	version;

	updateWindowDimensions = () => {
		// console.log('updating state');
		const width = window.innerWidth;
		if (width < 660) {
			this.version = 'mobile';
		} else if (width < 980) {
			this.version = 'tablet';
		} else if (width < 1200) {
			this.version = 'desktop';
		} else {
			this.version = 'wide';
		}
		if (this.version !== this.props.viewportVersion) {
			this.props.setViewportVersion(this.version);
		}
	};

	render() {
		return <div />;
	}
}

const mapStateToProps = state => ({
	viewportVersion: state.viewportVersion
});

const mapDispatchToProps = (dispatch: Function) => ({
	setViewportVersion(version: ViewportVersionType) {
		dispatch(setViewportVersion(version));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WindowViewportListener);
