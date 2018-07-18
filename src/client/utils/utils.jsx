// @flow

import React from "react";

export const splitedPageTitle = (text: string, minLineLength: number = 16) => {
	const words = text.trim().split(" ");
	let template;
	// Если строчка итак очень короткая, вернуть ее без разделений.
	// Иначе разбивать на слова в зависимости от их длины
	if (text.length <= minLineLength) {
		template = text;
	} else {
		// Если слова 2, то просто разбить их на две строчки.
		// Если 3 - разбить в зависимости от длины слов.
		// Если слова 4 (не считая пробелы) - по 2
		// В любом ином случае пусть переносы автоматически расставляет браузер
		switch (words.length) {
			case 2:
				template = (
					<React.Fragment>
						{words[0]}
						<br />
						{words[1]}
					</React.Fragment>
				);
				break;
			case 3:
				template =
					words[0].length + words[1].length >=
					words[1].length + words[2].length ? (
						<React.Fragment>
							{words[0]}
							<br />
							{`${words[1]} ${words[2]}`}
						</React.Fragment>
					) : (
						<React.Fragment>
							{`${words[0]} ${words[1]}`}
							<br />
							{words[2]}
						</React.Fragment>
					);
				break;
			case 4:
				template = (
					<React.Fragment>
						{`${words[0]} ${words[1]}`}
						<br />
						{`${words[2]} ${words[3]}`}
					</React.Fragment>
				);
				break;
			default:
				template = text;
		}
	}

	return template;
};

export const iterateOfObject = (obj: Object, func: Function) => {
	const keys = Object.keys(obj);
	if (keys.length === 0) {
		throw new Error("Объект не должен быть пустым");
	}
	let item;
	for (let it = keys.length; it; it -= 1) {
		item = keys[it - 1];
		func(item);
	}
};
