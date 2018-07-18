// @flow

const toArray = (string: string) => {
	const array = [];
	for (let i = 0; i < string.length; i += 1) {
		array.push(string[i]);
	}
	return array;
};

export const matchesAnyFormat = (string: string) => {
	// Данное охренительное выражение соответствует любому совпадению от начала(!) ввода правильного номера до его конца
	const number = /^(\d\s?)$|^(\d\s\(\d{1,2})$|^(\d\s\(\d{3}\))$|^(\d\s\(\d{3}\)\s\d{1,2})$|^(\d\s\(\d{3}\)\s\d{2}\s?)$|^(\d\s\(\d{3}\)\s\d{2}\s\d{1,2})$|^(\d\s\(\d{3}\)\s\d{2}\s\d{2}\s?)$|^(\d\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{1,3})$/g;

	if (string.search(number) >= 0) {
		return true;
	}
	return false;
};

const matchesFullFormat = (string: string) => {
	const fullNumber = /^(\d\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}\s?)$/g; // ! Допускает пробел в конце

	if (string.search(fullNumber) >= 0) {
		return true;
	}
	return false;
};

const doesntHaveDigits = (string: string) => {
	const digit = /\d/g;

	if (string.search(digit) === -1) {
		return true;
	}
	return false;
};

const changeTelFormat = (string: string, pattern?: RegExp) => {
	// Проверка строки на соответствие формату.
	// Если в строке вообще ни одной цифры, вернем пустую строку без дальнейших проверок.
	// Если выражение совпадает, вернем его без пребразований
	// Если нам мешает только пробел в конце, обрежем без преобразований (так быстрее)

	if (doesntHaveDigits(string)) {
		return "";
	} else if (matchesAnyFormat(string)) {
		return string;
	} else if (matchesFullFormat(string)) {
		return string.trim();
	}

	// иначе начнем преобразование.

	const mask = "d (ddd) dd dd ddd";

	// Массив с символами для дальнейшей замены (строки неизменяемы)
	const template: Array<string> = mask.match(/[\s\S]/g) || [];

	// Ищет все цифры в полученной строке
	const digit = /\d/g;

	// Массив с отфильтрованными из строки цифрами
	const numberValues: Array<string> = string.match(digit) || [];

	for (let i = 0, j = 0; i < template.length; i += 1) {
		switch (template[i]) {
			case "d":
				// заменить цифру и передвинуть указатель дальше. Если цифр больше нет, очистить
				template[i] = numberValues[j] ? numberValues[j] : " ";
				j += 1;
				break;

			case "(":
				// ПОЧИМУ НЕ РАБОТАИТ
				// Если осталась еще хоть 1 цифра, оставить знак. Иначе очистить открывающую скобку (т.е запретить висячие открытые скобки)
				template[i] = numberValues[j] ? template[i] : " ";
				break;

			case ")":
				// Если это была последняя цифра, оставить знак. Иначе очистить закрывающую скобку
				template[i] = numberValues[j - 1] ? template[i] : " ";
				break;

			default:
				break;
		}
	}

	return template.join("").trim();
};

export default changeTelFormat;
