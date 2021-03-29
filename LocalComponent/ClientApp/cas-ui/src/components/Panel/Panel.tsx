import { attributesFromBaseProps, BaseProps } from 'cas-ui/src/common/BaseProps';
import React from 'react';
import styles from './Panel.scss';

interface PanelProps {
	/** Specifies the visual appearance of the panel. */
	variant?: 'border' | 'shadow';
}

/** A white panel section typically used on top of a non-white background. */
export const Panel: React.FC<PanelProps & BaseProps> = (props) => {
	const Tag = props.tag || 'div';
	const attr = attributesFromBaseProps(props, { marginBottom: '16px' });

	attr.className = styles.Panel;
	attr['data-variant'] = props.variant || 'border';

	return <Tag {...attr}>{props.children}</Tag>;
};

interface PanelHeadingProps {
	/** If true, show the mobile variant of the component. */
	breakIf?: boolean;
}

/** A heading for a section inside a `Panel`. */
export const PanelHeading: React.FC<PanelHeadingProps & BaseProps> = (props) => {
	const Tag = props.tag || 'h2';
	const attr = attributesFromBaseProps(props, { marginBottom: '16px' });

	attr.className = styles.PanelHeading;
	if (props.breakIf) attr['data-break'] = true;

	return <Tag {...attr}>{props.children}</Tag>;
};
