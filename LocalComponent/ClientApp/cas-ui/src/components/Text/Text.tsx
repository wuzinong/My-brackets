import { attributesFromBaseProps, BaseProps } from 'cas-ui/src/common/BaseProps';
import { TextAlignProperty } from 'csstype';
import React, { FC } from 'react';
import styles from './Text.scss';

type TextLook =
	| 'BODY'
	| 'HEADING1'
	| 'HEADING2'
	| 'HEADING3'
	| 'HEADING4'
	| 'HEADING5'
	| 'HEADING6'
	| 'SMALL'
	| 'PREAMBLE_MEDIUM'
	| 'PREAMBLE_LARGE'
	| 'CAPTION'
	| 'LABEL'
	| 'LABEL_SMALL';

export interface TextProps extends BaseProps {
	/** Determines the look and feel of the text block (size, weight, etc). Overrides the default look for the text block's `tag`. */
	look?: TextLook;
	textAlign?: TextAlignProperty;
}

/** Renders a block of text. This component's main purpose is to provide a shorthand for choosing between the
 *  various text styles of the  design system, and to separate HTML tag from look and feel.
 *  If no `look` is provided, the chosen `tag`'s default look is applied.
 */
export const Text: FC<TextProps> = (props) => {
	const Tag = props.tag || 'div';
	const attr = attributesFromBaseProps(props, { textAlign: props.textAlign });

	const looks: Record<string, TextLook> = {
		p: 'BODY',
		h1: 'HEADING1',
		h2: 'HEADING2',
		h3: 'HEADING3',
		h4: 'HEADING4',
		h5: 'HEADING5',
		h6: 'HEADING6',
		small: 'SMALL',
		caption: 'CAPTION',
		label: 'LABEL',
	};

	const look = props.look || looks[props.tag] || 'BODY';

	attr['data-look'] = look;
	attr.className = styles.Text;

	return <Tag {...attr}>{props.children}</Tag>;
};
