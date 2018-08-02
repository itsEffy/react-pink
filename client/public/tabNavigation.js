// Данный скрипт добавит специальное поведение,
// сделав навигацию табом офигительно удобной

function tabNavigation() {
	var html = document.querySelector("html");
	var firstElement = document.querySelector(".main-nav__logo");
	var toggler = document.querySelector(".main-nav__toggler-element");
	var resetOrder;

	html.classList.add("disable-focus");

	// патч для IE, убирающий фокус с svg
	if (document.querySelector("body").classList.contains("MS")) {
		var svgs = Array.prototype.slice.call(document.querySelectorAll("svg"));
		svgs.forEach(function(svg) {
			svg.setAttribute("focusable", false);
		});
	}

	// откючим все лишние навигационные ссылки в гугл картах,
	// кроме основной

	// включаем спецстили для фокуса, как у Яндекса
	document.addEventListener("keydown", function(event) {
		if (event.key === "Tab") {
			// если это первое нажатие
			if (html.classList.contains("disable-focus")) {
				html.classList.remove("disable-focus");
				html.classList.add("enable-focus");

				// firstButton.tabIndex = -1;

				// ставим фокус !фокус сместится на элемент, следующий за первым
				firstElement.focus();
			} else {
				// document.activeElement.tabIndex = 0;
			}
		}
	});

	// на этом этапе мы можем точно сказать, что являлось активным элементом
	document.addEventListener("keyup", function(event) {
		if (event.key === "Tab") {
			try {
				if (
					!document.activeElement.classList.contains(
						"main-nav__link"
					) &&
					!document.activeElement.classList.contains(
						"main-nav__toggler-element"
					)
				) {
					// автоматически закроем меню, если в фокусе появилось что-либо,
					// кроме элементов меню
					toggler.checked = false;
				}
			} catch (e) {
				// умолчать об ошибке, если выбран какой-то другой элемент
			}
		}
	});

	// выключаем все фокусные обводки при возобновлении навигации мышью
	document.addEventListener("mousedown", function(event) {
		if (html.classList.contains("enable-focus")) {
			html.classList.remove("enable-focus");
			html.classList.add("disable-focus");
		}
	});
}

tabNavigation();
