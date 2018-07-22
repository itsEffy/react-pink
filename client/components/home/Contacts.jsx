// @flow

import React from 'react';

// import styles from '../sass/blocks/home/contacts.scss';

const Contacts = (props: {}) => (
	<section className="contacts">
		<h1 className="visually-hidden">Контакты</h1>
		<p className="contacts__title">
			Остались вопросы?<br /> Свяжитесь со мной!
		</p>
		<div className="contacts__inner">
			<div className="contacts__item">
				<p className="contacts__item-header">Звоните:</p>
				<a href="tel:+79082757131" className="contacts__item-text">
					+7 908 2757131
				</a>
			</div>
			<div className="contacts__item">
				<p className="contacts__item-header">Пишите:</p>
				<a
					href="mailto:bydlo.vezde@gmail.com"
					className="contacts__item-text"
				>
					bydlo.vezde@gmail.com
				</a>
			</div>
			<div className="contacts__item">
				<p className="contacts__item-header">
					Приезжайте в гости:<sup>*</sup>
				</p>
				<p className="contacts__item-text">
					Шмитовский проезд, д. 15/5
				</p>
			</div>
		</div>
	</section>
);

export default Contacts;
