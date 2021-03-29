export interface ISvgProps {
	/**
	 * Source url for the svg to load.
	 */
	src: string
	/**
	 * Required aria-label value for the svg used or alt tag if replace = true.
	 */
	alt: string
	/**
	 * Additional class names to add to the control for custom styling.
	 */
	className?: string
	/**
	 * Whether or not to replace the original image tag with an async loaded <svg>.
	 * @default true
	 */
	replace?: boolean

	/**
	 * If true will assume the image is an svg even if the extension is not ".svg".
	 */
	forceSvg?: boolean

	/**
	 * Any additional props are passed to the constructed <img> or <svg>.
	 */
	[key: string]: any
}
