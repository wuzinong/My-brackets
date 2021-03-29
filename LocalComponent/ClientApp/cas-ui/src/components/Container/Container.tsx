import React, { FC } from 'react';
import styles from './Container.scss';

export interface ContainerProps {
	/** Override the container's default max-width value */
	width?: string;

	/** The HTML tag type. Defaults to `div` if not defined. */
	tag?: string;
}

/** Positions its children inside a centered container with a maximum width. */
export const Container: FC<ContainerProps> = ({ children, width, tag }) => {
	const Tag: any = tag || 'div';
	return (
		<Tag className={styles.Container} style={{ maxWidth: width || '1200px' }}>
			{children}
		</Tag>
	);
};
