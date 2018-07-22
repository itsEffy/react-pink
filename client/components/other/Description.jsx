// @flow

import * as React from 'react';
import type { Element } from 'react';
// import styles from "../sass/blocks/description.scss";

// дочерних элементов должно быть несколько! Если второго элемента нет, пусть будет null
// TODO - разобраться с этим, разрешить только один дочерний элемент

type Props = { children: React.ChildrenArray<React.Element<any> | null> };

const Description = ({ children }: Props) => (
	<section className="description">
		<div className="description__inner">
			{React.Children.map(children, block => {
				if (React.isValidElement(block)) {
					return React.cloneElement(block, {
						className: 'description__block'
					});
				}
				return null;
			})}
		</div>
	</section>
);

export default Description;
