// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PriceSlider from './PriceSlider';
import PriceStatic from './PriceStatic';
import data from './priceData.json';

import styles from '../sass/blocks/home/price.scss';

const Price = (props: { viewportVersion: ViewportVersionType }) => (
	<section className={`${styles['price']} price`}>
		<div className={styles['price__inner']}>
			<h2 className="visually-hidden">Тарифы и цены</h2>
			{props.viewportVersion === 'mobile' ? (
				<PriceSlider data={data} />
			) : (
				<PriceStatic data={data} />
			)}
		</div>
	</section>
);

const mapStateToProps = ({ viewportVersion }) => ({ viewportVersion });

export default connect(mapStateToProps)(Price);
