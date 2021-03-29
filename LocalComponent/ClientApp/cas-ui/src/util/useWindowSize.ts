import { useState, useEffect } from 'react';

/**
 * React hook that returns the width and height of the user's screen.
 * (https://usehooks.com/useWindowSize/)
 */
export function useWindowSize() {
	const isClient = typeof window === 'object';

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) return;

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		() => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
