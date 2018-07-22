// @flow
import React from 'react';
import Slick from 'react-slick';

// import slickStyles from '../sass/blocks/home/slick-slider.scss';
// import styles from '../sass/blocks/home/price.scss';

type Props = {
	data: {
		features: Array<Object>,
		tarifs: Array<Tarif>
	}
};

// Подправить типы
const PriceSlick = ({ data: { tarifs, features } }: Props) => {
	// TODO Импортировать это из начальных настроек
	const tabletBr = 980;

	const settings = {
		slidesToShow: 1, // tarifs.length,
		dots: true,
		infinite: false,
		arrows: false,
		speed: 500,
		initialSlide: 1,
		touchThreshold: 15
	};

	const template = tarifs.map(item => (
		<article className="price__item" key={item.id}>
			<header className="price__item-header">
				{item.label ? (
					<span className="price__item-label">
						{item.label.toUpperCase()}
					</span>
				) : null}
				<p className="price__item-name">{item.name.toUpperCase()}</p>
				<p className="price__item-price">
					<span className="price__value">{item.price}</span>
					<span className="price__currency">{item.currency}</span>
				</p>
			</header>
			{features.map(option => (
				<div className="price__item-feature" key={option.key}>
					<span className="price__item-feature-name">
						{option.name.toUpperCase()}
					</span>
					{item.features[option.key] === true ? (
						<span className="price__sign">
							{` есть`}
							<svg width="31" height="22">
								<use xlinkHref="img/svg/home-sprite.svg#yes" />
							</svg>
						</span>
					) : (
						<span className="price__sign">
							{` нет`}
							<svg width="27" height="27">
								<use xlinkHref="img/svg/home-sprite.svg#no" />
							</svg>
						</span>
					)}
				</div>
			))}
		</article>
	));

	return <Slick {...settings}>{template}</Slick>;
};

export default PriceSlick;
