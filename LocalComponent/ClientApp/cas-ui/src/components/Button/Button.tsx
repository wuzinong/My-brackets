import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './Button.scss';

export interface ButtonBaseProps {
	/** Defines the color scheme and overall look of the button. */
	variant?: 'blue' | 'green' | 'dark' | 'pink' | 'red' | 'subtle' | 'text';

	/** Specifies the dimensions of the button. */
	size?: 'small' | 'medium' | 'large';

	/** Applies padding rules that makes the button a perfect square when used with only one Font Awesome icon as content. */
	iconPadding?: boolean;

	/** Makes the button take up the full width of its parent. */
	fullWidth?: boolean;

	/** Disables the button. */
	disabled?: boolean;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, ButtonBaseProps {}
/** Extends the HTML `button` element with look and feel. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ variant = 'subtle', size = 'medium', children, iconPadding, fullWidth, ...rest },
	ref,
) {
	return (
		<button
			ref={ref}
			className={styles.Button}
			data-variant={variant}
			data-size={size}
			data-icon-padding={iconPadding}
			data-fullwidth={fullWidth}
			{...rest}
		>
			{children}
		</button>
	);
});

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ButtonBaseProps {}
/** Extends an `a` element, making it look like a button. This is used for linking to external websites -
 *  for internal routing within the React application, consider using the `RouterLinkButton` component, which wraps
 *  a `Link` component from the `react-router` package.
 */
export const LinkButton: FC<LinkButtonProps> = ({
	variant = 'subtle',
	size = 'medium',
	children,
	iconPadding,
	fullWidth,
	...rest
}) => {
	return (
		<a
			className={styles.Button}
			data-variant={variant}
			data-size={size}
			data-icon-padding={iconPadding}
			data-fullwidth={fullWidth}
			{...rest}
		>
			{children}
		</a>
	);
};

export interface RouterLinkButtonProps extends LinkProps, ButtonBaseProps {}
/** Extends a `react-router` `Link` component, making it look like a button. */
export const RouterLinkButton: FC<RouterLinkButtonProps> = ({
	variant = 'subtle',
	size = 'medium',
	children,
	iconPadding,
	fullWidth,
	...rest
}) => {
	return (
		<Link
			className={styles.Button}
			data-variant={variant}
			data-size={size}
			data-icon-padding={iconPadding}
			data-fullwidth={fullWidth}
			{...rest}
		>
			{children}
		</Link>
	);
};
