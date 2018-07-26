// @flow

// тротлинг от Кантора

/*
function throttleContext(func, time) {
	let isThrottled = false;
	let savedArgs;
	let self;

	function wrapper() {
		if (isThrottled) {
			savedArgs = arguments;
			self = this;
			return;
		}

		// если функция не пропущена
		func.apply(this, arguments);

		isThrottled = true;

		setTimeout(function() {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(self, savedArgs);
				savedArgs = self = null;
			}
		}, time);
	}

	return wrapper;
}

*/
// не очищается таймаут, нет возврата - не чистая функция. написано с хвостом

// мой вариант. упрощенный, без контекста. очищает таймер

const throttle = (func, time) => {
	let timeout;
	let canExecute = true;
	let result;

	return (...args) => {
		if (canExecute) {
			clearTimeout(timeout); // нужно ли?

			// заблокировать
			canExecute = false;

			result = func(...args);

			// разблокировать через определенное время
			timeout = setTimeout(() => {
				canExecute = true;
			}, time);
		}
		return result;
	};
};

// Простой и быстрый дебаунс для лямбд
export const debounce = (func, time) => {
	let timeout;
	let result;
	let savedArgs;

	return (...args) => {
		clearTimeout(timeout);
		savedArgs = [...args];
		timeout = setTimeout(() => {
			result = func(...savedArgs);
			return result;
		});
	};
};
