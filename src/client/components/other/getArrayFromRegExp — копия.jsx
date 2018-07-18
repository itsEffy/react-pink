// @flow

// Понимает следующие виды токенов: \ d s ( ) (скобки только как символы) {1..9}
const getArrayTemplate = (pattern: RegExp) => {
	const string = pattern.source;

	let template: Array<string> = [];

	const i = {
		value: 0,
		// Данный метод запускается после успешного парсинга
		next: function next(counter: number = 1) {
			this.value += counter;
		},
		prev: function prev(counter: number = 1) {
			this.value -= counter;
		}
	}; // Указатель
	let char: string; // Анализируемый символ
	let memoryChar: string; // Предыдущий запоминаемый символ
	let expectingParenthesis: boolean = false; // ожидание закрытия скобок
	let couldBeQuantificator: boolean = false; // допущение литерала квантификатора

	const error = (message?: string) => {
		// Оповестить либо готовым сообщением, либо дефолтным
		if (message) {
			console.log(message);
		} else {
			console.log(`Unexpected token ${char} at position ${i.value}!`);
		}
		// Прервать цикл
		i.value = string.length;
		// Вернуть нихэ
		template = [];
	};

	const parseQuantificator = (ch: string) => {
		let symbol: string = ch;
		let token: string = "";
		// парсить число. Запретить начинать с 0
		if (symbol === "0") {
			error();
			return;
		}
		while (symbol >= "0" && symbol <= "9") {
			token += symbol;
			// сдвинуть указатель
			i.next();
			// и запросить следующий символ
			symbol = string[i.value];
		}
		// Закончить парсинг и умножить предыдущий символ
		if (symbol === "}") {
			const multiplier = parseInt(token, 10);
			// т.к предыдущий символ уже был 1 раз, уменьшаем счетчик сразу
			for (let j = multiplier - 1; j; j -= 1) {
				template.push(memoryChar);
			}
			// очистить память
			memoryChar = "";
			i.next();
		} else error();
	};

	const parseSymbol = (ch: string) => {
		switch (ch) {
			case "d":
				couldBeQuantificator = true;
				template.push(ch); //
				memoryChar = ch;
				i.next();
				break;
			case "s":
				template.push(" ");
				i.next();
				break;
			case "(":
				expectingParenthesis = true; //
				template.push("(");
				i.next();
				break;
			case ")":
				if (expectingParenthesis) {
					template.push(")");
					i.next();
				} else error("Ошибка: Нельзя закрыть скобку до ее открытия");
				break;
			case "{":
				if (couldBeQuantificator) {
					i.next();
					parseQuantificator(ch);
				} else error("Только цифры могут повторяться");
				break;
			default:
				error();
				break;
		}
	};

	// Начало парсинга
	char = string[i.value];
	while (i.value < string.length) {
		// Ожидаем только "\"
		if (char !== "\\") {
			error();
		} else parseSymbol(char);
	}

	if (expectingParenthesis) {
		error("Ошибка: cкобки не закрыты!");
	}

	return template;
};
