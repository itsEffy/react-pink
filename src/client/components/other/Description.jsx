// @flow

import * as React from "react";
import type { Element } from "react";
import styles from "../sass/blocks/description.scss";

// дочерних элементов должно быть несколько! Если второго элемента нет, пусть будет null
// TODO - разобраться с этим, разрешить только один дочерний элемент

type Props = { children: React.ChildrenArray<React.Element<any> | null> };

const Description = ({ children }: Props) => (
	<section className={styles["description"]}>
		<div className={styles["description__inner"]}>
			{React.Children.map(children, block => {
				if (React.isValidElement(block)) {
					return React.cloneElement(block, {
						className: styles["description__block"]
					});
				}
				return null;
			})}
		</div>
	</section>
);

export default Description;

