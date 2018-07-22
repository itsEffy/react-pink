// @flow

import React from 'react';
// import styles from "../sass/blocks/home/price.scss";

type Props = {
	data: {
		features: Array<Object>,
		tarifs: Array<Tarif>
	}
};

const PriceStatic = ({ data: { features, tarifs } }: Props) => (
	<div className="price__static-wrapper">
		<div className="price__static-table">
			<div className="price__options">
				{features.map(option => (
					<div className="price__option" key={option.key}>
						<span className="price__option-name">
							{option.name}
						</span>
					</div>
				))}
			</div>
			{tarifs.map(item => (
				<article className="price__item" key={item.id}>
					<header className="price__item-header">
						{item.label ? (
							<span className="price__item-label">
								{item.label.toUpperCase()}
							</span>
						) : null}
						<p className="price__item-name">
							{item.name.toUpperCase()}
						</p>
						<p className="price__item-price">
							<span className="price__value">{item.price}</span>
							<span className="price__currency">{` ${
								item.currency
							}`}</span>
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
			))}
		</div>
	</div>
);

export default PriceStatic;
