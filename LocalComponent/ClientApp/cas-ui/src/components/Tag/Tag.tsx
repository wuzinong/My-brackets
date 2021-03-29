import { attributesFromBaseProps, BaseProps } from 'cas-ui/src/common/BaseProps';
import React, { FC } from 'react';
import styles from './Tag.scss';

export interface TagProps extends BaseProps {
	/** Defines the color scheme of the tag. */
	variant?: 'green' | 'red' | 'yellow' | 'blue';
}

/** Renders a colored span of text. */
export const Tag: FC<TagProps> = (props) => {
	const Tag = props.tag || 'span';
	const attr = attributesFromBaseProps(props);

	attr.className = styles.Tag;
	attr['data-variant'] = props.variant || 'green';

	return <Tag {...attr}>{props.children}</Tag>;
};
