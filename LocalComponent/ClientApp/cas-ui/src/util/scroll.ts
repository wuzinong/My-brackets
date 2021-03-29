/** Returns the distance in pixels of an element to the top of the document. */
export function getElementOffsetFromTop(elem: HTMLElement): number {
	let offsetTop = 0;
	do {
		if (!isNaN(elem.offsetLeft)) {
			offsetTop += elem.offsetTop;
		}
	} while ((elem = elem.offsetParent as HTMLElement));
	return offsetTop;
}

interface ScrollToElementParams {
	/** The element to scroll to. */
	element: HTMLElement;

	/** Optional: If true, do an animated, smooth scroll. */
	smooth?: boolean;

	/** Optional: If set, offsets the target scroll point by a number of pixels. */
	offset?: number;
}

/** Scroll vertically to the top of a given element. Can be smooth or immediate, and can take a pixel offset
 *  (f.ex. in case you want to scroll to a point a bit above the element.) */
export function scrollToElement(params: ScrollToElementParams) {
	if (!params.element) return;

	if (!params.offset) params.offset = 0;
	window.scrollTo({
		top: getElementOffsetFromTop(params.element) + params.offset,
		behavior: params.smooth ? 'smooth' : 'auto',
	});
}

interface ScrollElementIntoViewParams {
	/** The element to scroll to. */
	element: HTMLElement;

	/** Optional: If true, do an animated, smooth scroll. */
	smooth?: boolean;

	/** Optional: How far from the edge of the screen you want the element after scrolling. Defaults to a sensible default if not set. */
	margin?: number;
}

/** Scroll vertically until `element` is in view. Can be smooth or immediate, and can take a `margin`, so the scrolled-to element will not
 *  be pressed all up against the border of the screen after scroll. */
export function scrollElementIntoView(params: ScrollElementIntoViewParams) {
	if (!params.element) return;
	if (!params.margin) params.margin = 16;

	const elementTop = getElementOffsetFromTop(params.element) - params.margin;
	const elementBottom =
		getElementOffsetFromTop(params.element) + params.element.getBoundingClientRect().height + params.margin;

	let position: number;
	if (window.scrollY > elementTop) position = elementTop;
	if (window.scrollY < elementBottom - window.innerHeight) position = elementBottom - window.innerHeight;

	window.scrollTo({ top: position, behavior: params.smooth ? 'smooth' : 'auto' });
}
