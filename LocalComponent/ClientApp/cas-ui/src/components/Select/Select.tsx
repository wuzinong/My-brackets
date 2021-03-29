import cn from 'classnames';
import { useSelect } from 'downshift';
import React from 'react';
import styles from './Select.scss';

function escapeStringForRegexp(string: string): string {
	return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

export interface SelectOption {
	name: string;
	value: any;
	disabled?: boolean;
}

type OriginalHTMLSelect = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
interface OwnProps {
	/** Removes all spacing around the component, facilitating custom layouting. */
	noSpacing?: boolean;

	/**  */
	options: SelectOption[];

	/** Initial selected option	 */
	defaultValue?: any;

	/** Whether disabled select	 */
	disabled?: boolean;

	/** Placeholder of select */
	placeholder?: string;

	/** Called when select an option or input value change */
	onChange?: (value: SelectOption) => void;

	/** Called when leaving the input but not when clicking on a list item */
	onBlur?: () => void;

	/** Message displayed to explain why some options are diabled */
	disabledOptionExplanation?: string;

	state?: 'validated' | 'invalid';

	size?: 'small' | 'regular';
}
export type SelectProps = Omit<OriginalHTMLSelect, 'onChange' | 'size'> & OwnProps;

export const Select: React.FC<SelectProps> = ({
	defaultValue,
	disabled = false,
	noSpacing,
	options = [],
	state,
	style = {},
	size,
	onChange = () => null,
	disabledOptionExplanation = '',
	...rest
}) => {
	const itemToString = (item?: SelectOption) => (item ? item.name : '');
	const {
		getItemProps,
		getMenuProps,
		getToggleButtonProps,
		highlightedIndex,
		inputValue,
		isOpen,
		selectedItem,
	} = useSelect({
		items: options,
		itemToString: itemToString,
		initialSelectedItem: options.find((item) => item.value === defaultValue),
		onSelectedItemChange: ({ selectedItem }) => {
			if (selectedItem !== null) {
				onChange(selectedItem);
			}
		},
	});

	return (
		<div
			className={styles.SelectContainer}
			style={style}
			data-nospacing={noSpacing}
			data-state={state}
			data-size={size}
		>
			<button
				type="button"
				className={styles.SelectToggle}
				{...getToggleButtonProps({ disabled: disabled })}
				aria-label="Toggle menu"
				{...rest}
			>
				{itemToString(selectedItem) || ''}
			</button>
			<ul className={cn(styles.SelectPopover, { [styles.SelectPopoverOpen]: isOpen })} {...getMenuProps()}>
				{isOpen &&
					options.map((item, index) => (
						<li
							className={styles.SelectItem}
							style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
							key={`${item.value}${index}`}
							title={item.disabled ? disabledOptionExplanation : ''}
							{...getItemProps({ item, index, disabled: item.disabled })}
						>
							{inputValue === '' ? (
								itemToString(item)
							) : (
								<span
									dangerouslySetInnerHTML={{
										__html: itemToString(item).replace(
											new RegExp(`(${escapeStringForRegexp(inputValue)})`, 'i'),
											`<strong>$1</strong>`,
										),
									}}
								/>
							)}
						</li>
					))}
			</ul>
		</div>
	);
};
