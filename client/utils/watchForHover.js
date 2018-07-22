export default function watchForHover() {
	let hasHoverClass = false;
	const container = document.body;
	let lastTouchTime = 0;

	function enableHover() {
		// filter emulated events coming from touch events
		if (new Date() - lastTouchTime < 500) return;
		if (hasHoverClass) return;

		// container.className += ' hasHover';
		container.className = container.className.replace(
			'noHover',
			'hasHover'
		);
		hasHoverClass = true;
	}

	function disableHover() {
		if (!hasHoverClass) return;

		container.className = container.className.replace(
			'hasHover',
			'noHover'
		);
		hasHoverClass = false;
	}

	function updateLastTouchTime() {
		lastTouchTime = new Date();
	}

	document.addEventListener('touchstart', updateLastTouchTime, true);
	document.addEventListener('touchstart', disableHover, true);
	document.addEventListener('mousemove', enableHover, true);

	console.log('слежу за ховером');

	enableHover();
}
