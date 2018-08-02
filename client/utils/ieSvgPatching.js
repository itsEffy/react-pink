const ieSvgPatching = () => {
	try {
		if (window.navigator.userAgent.search(/Trident/g) >= 0) {
			const svgs = Array.prototype.slice.call(
				document.querySelectorAll("svg")
			);
			svgs.forEach(svg => {
				svg.setAttribute("focusable", false);
			});
		}
	} catch (e) {
		/* замалчиваем ошибку, если мы на сервере */
	}
};

export default ieSvgPatching;
