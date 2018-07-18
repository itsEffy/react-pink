// @flow
import React from 'react';
import Slick from 'react-slick';

import styles from '../sass/blocks/home/slick-slider.scss';

import reviewsS from '../sass/blocks/home/reviews.scss';
import priceS from '../sass/blocks/home/price.scss';

// Протипировать настройки
// Настроить отображение

const SliderTemplates = (props: {
	settings: ?Object,
	type: string,
	data: Array<Review> | { features: Array<Object>, tarifs: Array<Tarif> }
}) => {
	let template = null;

	// TODO Импортировать это из начальных настроек
	const tabletBr = 980;

	const settings = {
		// Настройки по умолчанию
		reviews: {
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			responsive: [
				{
					breakpoint: tabletBr,
					settings: {
						arrows: false,
						dots: true
					}
				}
			],
			...props.settings
		},
		price: {
			dots: true,
			infinite: false,
			arrows: false,
			speed: 500,
			initialSlide: 1,
			...props.settings
		}
	};

	switch (props.type) {
		case 'reviews':
			template = props.data.map(item => (
				<blockquote className={`${reviewsS['reviews__item']}`} key={item.id}>
					<cite className={reviewsS['reviews__author-name--top']}>{item.authorName}</cite>
					<p className={reviewsS['reviews__text']}>{item.text}</p>
					<cite className={reviewsS['reviews__author-name--bottom']}>{item.authorName}</cite>
					<p className={reviewsS['reviews__author-about']}>{item.authorAbout}</p>
				</blockquote>
			));
			break;
		case 'price':
			// Получает данные прямо из json сразу, без запросов на сервер.
			// Правильно было бы представить эти данные в виде таблицы, но данные разумнее разделять по тарифам, которые в данном макете являются столбцами, поэтому представим их в виде дивов
			template = props.data.tarifs.map(item => (
				<article className={priceS['price__item']} key={item.id}>
					<header className={priceS['price__item-header']}>
						{item.label ? (
							<span className={priceS['price__item-label']}>{item.label.toUpperCase()}</span>
						) : null}
						<p className={priceS['price__item-name']}>{item.name}</p>
						<p className={priceS['price__item-price']}>
							<span className={priceS['price__value']}>{item.price}</span>
							<span className={priceS['price__currency']}>{` ${item.currency}`}</span>
						</p>
					</header>
					{props.data.features.map(option => (
						<div className={priceS['price__item-feature']}>
							<span className={priceS['price__item-feature-name']}>{option.name}</span>
							{item.features[option.key] === true ? (
								<span className={priceS['price__feature-yes']}>{` есть`}</span>
							) : (
								<span className={priceS['price__feature-no']}>{` нет`}</span>
							)}
						</div>
					))}
				</article>
			));
			break;
		default:
			template = <div>какой-то несуществующий тип слайдера</div>;
	}

	return <Slick {...settings[props.type]}>{template}</Slick>;
};

export default SliderTemplates;
