import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

/**
 * Disables automatic injection of CSS styles for Font Awesome, in order to comply with a Content Security Policy that disallows inline CSS.
 * Call this before any other `fontawesome` API calls. Importing the function will also import
 * `@fortawesome/fontawesome-svg-core/styles.css` into your Parcel/Webpack bundle, so the CSS injection is not necessary.
 *
 * More info:
 * https://fontawesome.com/how-to-use/on-the-web/other-topics/security
 */
export function initializeFontAwesome() {
	config.autoAddCss = false;
}
