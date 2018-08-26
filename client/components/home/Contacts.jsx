// @flow

import React from "react";

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
				<a href="tel:+79055035350" className="contacts__item-text">
					+7 905 5035350
				</a>
			</div>
			<div className="contacts__item">
				<p className="contacts__item-header">Пишите:</p>
				<a
					href="mailto:elizaveta.piht@gmail.com"
					className="contacts__item-text"
				>
					elizaveta.piht@gmail.com
				</a>
			</div>
			<div className="contacts__item">
				<p className="contacts__item-header">
					<abbr title="ненастоящий адрес" className="contacts__abbr">
						Приезжайте в гости:<sup>*</sup>
					</abbr>
				</p>
				<p className="contacts__item-text">
					Шмитовский проезд, д. 15/5
				</p>
			</div>
		</div>
	</section>
);

export default Contacts;
