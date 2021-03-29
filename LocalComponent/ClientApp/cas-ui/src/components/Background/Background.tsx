import { attributesFromBaseProps, BaseProps } from 'cas-ui/src/common/BaseProps';
import React from 'react';
import styles from './Background.scss';

type BackgroundProps = BaseProps;

/** A non-white background, meant to be used as a backdrop for card sections and other containers */
export const Background: React.FC<BackgroundProps> = (props) => {
	const Tag: any = props.tag || 'div';
	const attr = attributesFromBaseProps(props);
	attr.className = styles.Background;

	return <Tag {...attr}>{props.children}</Tag>;
};
