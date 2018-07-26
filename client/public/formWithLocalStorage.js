/* Собственный код */

/* для SSR. До того, как подъедет бандл (либо вместо него, если не доедет) позволяет 
   сохранить в localStorage значения [пока только] текстовых инпутов, 
   чтобы при загрузке реакт-приложения они внезапно не сбросились (иначе могут 
   возникнуть непредвиденные проишествия типа отправки на сервер значений элементов форм, ранее сохраненных,
   а после rehydrate не затронутых, поскольку они выгрузятся реактом из localStorage в value, 
   но не будут визуально видны) */

function watchTourForm() {
	// сделать проще - дать список ключей
	var formValues = {
		name: null,
		surname: null,
		patronymic: null,
		tel: null,
		email: null,
		emotions: null
	};

	// var keys = [name, surname, patronymic, tel, email, emotions];

	var keys = Object.getOwnPropertyNames(formValues);

	//
	function getFormElements() {
		var elements = {};
		for (var i = keys.length; i; i -= 1) {
			elements[keys[i - 1]] = document.querySelector("#" + keys[i - 1]);
		}
		return elements;
	}

	//

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
		// если ничего в storage нет, так и оставить null'ы
		if (state === undefined) {
			return;
		}
		// иначе загрузить из него начальные значения, если они не пустые
		for (var i = keys.length; i; i -= 1) {
			if (state[keys[i - 1]] !== "") {
				formValues[keys[i - 1]] = state[keys[i - 1]];
			}
		}
	}

	function setValuesToInputs() {
		// обработчик на каждый элемент
		for (var i = keys.length; i; i -= 1) {
			form[keys[i - 1]].value = formValues[keys[i - 1]];
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
		console.log("submit target: ", event.target);
		event.target.submit();
	}

	function addListeners() {
		// обработчик на каждый элемент
		for (var i = keys.length; i; i -= 1) {
			form[keys[i - 1]].addEventListener("input", storageSaving);
		}

		// на случай вообще отсутствия бандла: обработчик на форму,
		// сбрасывающий localStorage в случае submitting
		form.addEventListener("submit", clearValuesInStorage);
	}

	function removeListeners() {
		// обработчик на каждый элемент
		for (var i = keys.length; i; i -= 1) {
			form[keys[i - 1]].removeEventListener("input", storageSaving);
		}

		// на случай вообще отсутствия бандла: обработчик на форму,
		// сбрасывающий localStorage в случае submitting
		form.removeEventListener("submit", clearValuesInStorage);
	}

	// загружаем состояние из хранилища, модифицируем наш объект
	var state = loadStorageState();
	getSavedFormValues();
	// var formElements = getFormElements();
	var form = document.querySelector("#tour");
	setValuesToInputs();
	addListeners();

	console.log("отслеживаю форму");

	// выключает отслеживание
	return function() {
		removeListeners();
		formValues = null;
	};
}

// включить отслеживание, вернув вызываемую затем функцию выключения.
var disableWatchingForm = watchTourForm();
