const f = `function watchTourForm() {var formValues = {
		name: null,
		surname: null,
		patronymic: null,
		tel: null,
		email: null,
		emotions: null
	};
	var keys = Object.getOwnPropertyNames(formValues);
	function getFormElements() {
		var elements = {};
		for (var i = keys.length; i; i -= 1) {
			elements[keys[i - 1]] = document.querySelector("#" + keys[i - 1]);
		}
		return elements;
	}
	function loadStorageState() {
		try {
			const serializedState = localStorage.getItem("state");
			if (serializedState === null) {
				return undefined;
			}
			return JSON.parse(serializedState);
		} catch (err) {
			return undefined;
		}
	}
	function getSavedFormValues() {
		if (state === undefined) {
			return;
		}
		for (var i = keys.length; i; i -= 1) {
			if (state[keys[i - 1]] !== "") {
				formValues[keys[i - 1]] = state[keys[i - 1]];
			}
		}
	}
	function saveToStorage(key, value) {
		// создать пустой объект, если ничего не сохранено
		if (state === undefined) {
			state = {};
		}
		state[key] = value;
		localStorage.setItem("state", JSON.stringify(state));
	}
	function storageSaving(event) {
		console.log("change: ", event.target.name, event.target.value);
		saveToStorage(event.target.name, event.target.value);
	}
	function clearValuesInStorage(event) {
		event.preventDefault();
		for (var i = keys.length; i; i -= 1) {
			saveToStorage(keys[i - 1], "");
		}
		event.target.submit();
	}
	function addListeners() {
		for (var i = keys.length; i; i -= 1) {
			form[keys[i - 1]].addEventListener("input", storageSaving);
		}
		form.addEventListener("submit", clearValuesInStorage);
	}
	function removeListeners() {
		for (var i = keys.length; i; i -= 1) {
			form[keys[i - 1]].removeEventListener("input", storageSaving);
		}
		form.removeEventListener("submit", clearValuesInStorage);
	}
	var state = loadStorageState();
	getSavedFormValues();
	var form = document.querySelector("#tour");
	addListeners();
	console.log("отслеживаю форму");
	return function() {
		removeListeners();
	};
};
var disableWatchingForm = watchTourForm();
`;

export default f;
