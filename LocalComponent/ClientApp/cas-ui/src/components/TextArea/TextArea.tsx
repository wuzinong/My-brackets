import React, { FC } from 'react';
import styles from './TextArea.scss';

export interface TextAreaProps
	extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	/** Removes all spacing around the component, facilitating custom layouting. */
	noSpacing?: boolean;

	state?: 'validated' | 'invalid';
}

export const TextArea: FC<TextAreaProps> = ({ noSpacing, state, ...rest }) => {
	return (
		<textarea
			className={styles.TextArea}
			data-nospacing={noSpacing}
			data-state={state}
			autoComplete="no"
			{...rest}
		></textarea>
	);
};
