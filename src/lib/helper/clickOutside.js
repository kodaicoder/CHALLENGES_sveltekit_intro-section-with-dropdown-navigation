// @ts-nocheck
///checking click outside of the dropdown button?
export function clickOutside(element, callbackFunction) {
	function onClick(event) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}
	document.addEventListener('click', onClick);
	return {
		update(newCallbackFunction) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.removeEventListener('click', onClick);
		}
		// pause() {
		// 	document.removeEventListener('click', onClick);
		// },
		// resume() {
		// 	document.addEventListener('click', onClick);
		// }
	};
}
