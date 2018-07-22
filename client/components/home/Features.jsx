// @flow

import React from 'react';
// import styles from "../sass/blocks/home/features.scss";
import Effect from './Effect.jsx';

const Features = (props: {}) => (
	<section className="features">
		<div className="features__inner">
			<div className="features__title-outer">
				<p className="promo-title">
					Устали от&nbsp;серости мегаполиса?
				</p>
				<p className="promo-title">Нам есть, что вам предложить!</p>
			</div>
			<div className="features__main-outer">
				<h1 className="visually-hidden" style={{ display: 'none' }}>
					Почему pink?
				</h1>
				<ul className="features__list">
					<li className="features__item">
						<b className="features__item-title">
							Поднимает настроение
						</b>
						<p className="features__item-description">
							Приложение позволит вам победить осеннюю хандру
							и&nbsp;депрессию буквально в&nbsp;несколько кликов!
						</p>
					</li>
					<li className="features__item">
						<b className="features__item-title">
							Меняет мир вокруг
						</b>
						<p className="features__item-description">
							Сделайте снимок и&nbsp;украсьте его смайликом или
							текстовой подписью, чтобы усилить эффект
						</p>
					</li>
					<li className="features__item">
						<b className="features__item-title">
							Заводит новых друзей
						</b>
						<p className="features__item-description">
							Ставьте лайки, комментируйте, делитесь фотографиями
							с&nbsp;друзьями и&nbsp;заводите новых
						</p>
					</li>
				</ul>
			</div>
			<div className="features__effect-outer">
				<Effect containerClassName="features__effect" />
			</div>
		</div>
	</section>
);

export default Features;
