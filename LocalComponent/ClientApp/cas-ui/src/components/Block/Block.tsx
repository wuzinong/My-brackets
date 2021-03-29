import { BaseProps } from 'cas-ui/src/common/BaseProps';
import React, { FC } from 'react';

export interface BlockProps extends React.CSSProperties {
	/** The rendered HTML tag. Defaults to `div`. */
	tag?: keyof JSX.IntrinsicElements;

	id?: string;
	className?: string;
	onClick?: () => void;
	/** HTML attributes passed through to the rendered element. */
	attr?: Pick<BaseProps, 'attr'>;
}

/**
 * Renders a plain element with some styles, ideal for ad-hoc spacing and positioning.
 *
 * ### Example usage
 *
 * Fine-tuning position with margins, padding, transform, dimensions, etc.
 * ```jsx
 *    <Block marginTop="16px" transform="translateX(2px)">
 *      <Button>Position me!</Button>
 *    </Block>
 * ```
 *
 * Adding some spacing between two elements
 * ```jsx
 *    <Button>Cancel</Button>
 *    <Block width="32px"/>
 *    <Button>OK</Button>
 * ```
 *
 * Layouting (here right-aligning children)
 * ```jsx
 *    <Block display="flex" flexDirection="row" justifyContent="flex-end">
 *      <Button>Cancel</Position>
 *      <Button>OK</Position>
 *    </Block>
 * ```
 *
 */
export const Block: FC<BlockProps> = ({ children, tag, attr, className, id, onClick, ...style }) => {
	const Tag: any = tag || 'div';

	return (
		<Tag className={className} style={style} id={id ? id : null} {...attr} onClick={onClick}>
			{children}
		</Tag>
	);
};
