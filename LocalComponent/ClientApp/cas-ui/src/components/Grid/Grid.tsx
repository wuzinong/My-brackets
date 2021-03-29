import React, { FC } from 'react';
import { Block, BlockProps } from '../Block/Block';
import styles from './Grid.scss';

export interface ContainerProps extends BlockProps {
	/** Override the container's default max-width value */
	maxWidth?: number;
}
/** Positions its children inside a centered container with a maximum width. */
export const Container: FC<ContainerProps> = ({ children, maxWidth, ...props }) => {
	return (
		<Block className={styles.Container} maxWidth={maxWidth} {...props}>
			{children}
		</Block>
	);
};

export type RowProps = BlockProps
/** Positions its children inside a centered Row with a maximum width. */
export const Row: FC<RowProps> = ({ children, ...props }) => {
	return (
		<Block className={styles.Row} {...props}>
			{children}
		</Block>
	);
};

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export interface ColProps extends BlockProps {
	/** How many columns it should span over */
	span?: ColSpan;

	/** Offsetting a column */
	offset?: ColOffset;
}
/** Positions its children inside a centered Col with a maximum width. */
export const Col: FC<ColProps> = ({ children, span = 12, offset, ...props }) => {
	const spanPercentage = `${(100 / 12) * span}%`;
	let offsetPercentage;
	if (offset) {
		offsetPercentage = `${(100 / 12) * offset}%`;
	}
	return (
		<Block
			className={styles.Col}
			flexBasis={spanPercentage}
			maxWidth={spanPercentage}
			marginLeft={offsetPercentage}
			{...props}
		>
			{children}
		</Block>
	);
};
