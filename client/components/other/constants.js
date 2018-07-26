export const URL = "http://192.168.0.2:5050"; // json-server

export const formValidationDelay = 700; // ms
export const formSavingDelay = 1000; // ms

// данный енам хранит запрещенные символы для каждого типа
export const forbiddenInputSymbols = {
	text: /[^а-яa-z]*/gi
};

export const keyCodes = {
	"0": 48,
	"9": 57,
	A: 65,
	Z: 90,
	SPACE: 32,
	BACKSPACE: 8,
	SHIFT: 16,
	DELETE: 46,
	LEFT_ARROW: 37,
	UP_ARROW: 38,
	RIGHT_ARROW: 39,
	DOWN_ARROW: 40,
	NUMPAD_0: 96,
	NUMPAD_9: 105,
	NUMPAD_DOT: 110
};

export const allowedKeyCodes = {
	text: []
};
