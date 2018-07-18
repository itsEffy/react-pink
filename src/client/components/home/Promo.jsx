// @flow

import React from "react";
import styles from "../sass/blocks/home/promo.scss";
import HandPicture from "./HandPicture";
import Download from "./Download";

const Promo = (props: {}) => (
	<section className={styles["promo"]}>
		<div className={styles["promo__inner"]}>
			<h1 className="visually-hidden" style={{ display: "none" }}>
				Pink
			</h1>
			<div className={styles["promo__image"]}>
				<HandPicture />
			</div>
			<Download containerClassName={styles["promo__download"]} />
		</div>
	</section>
);

export default Promo;
