// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setViewportVersion } from '../actions/actionCreators';

class WindowViewportListener extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0 };
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		console.log('updating viewport');
		this.setState({ width: window.innerWidth });
	}

	setViewportVersion() {}

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

export default connect(mapStateToProps, mapDispatchToProps)(WindowViewportListener);
