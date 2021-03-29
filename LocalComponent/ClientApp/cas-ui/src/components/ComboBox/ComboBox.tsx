import cn from 'classnames';
import { useCombobox } from 'downshift';
import React, { useEffect, useState } from 'react';
import styles from './ComboBox.scss';

function escapeStringForRegexp(string: string): string {
	return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

export interface ComboBoxOption {
	name: string;
	value: any;
	disabled?: boolean;
}

type OriginalHTMLSelect = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface OwnProps {
	/** Removes all spacing around the component, facilitating custom layouting. */
	noSpacing?: boolean;

	/**  */
	options: ComboBoxOption[];

	/** Initial selected option	 */
	defaultValue?: any;

	/** Whether disabled select	 */
	disabled?: boolean;

	/** Placeholder of select */
	placeholder?: string;

	/** Called when select an option or input value change */
	onChange?: (value: ComboBoxOption) => void;

	/** Called when leaving the input but not when clicking on a list item */
	onBlur?: () => void;

	/** Message displayed to explain why some options are diabled */
	disabledOptionExplanation?: string;

	state?: 'validated' | 'invalid';
}
export type ComboBoxProps = Omit<OriginalHTMLSelect, 'onChange'> & OwnProps;

export const ComboBox: React.FC<ComboBoxProps> = ({
	defaultValue,
	disabled = false,
	noSpacing,
	options = [],
	placeholder = '',
	state,
	style = {},
	onChange = () => null,
	onFocus = () => null,
	onBlur = () => null,
	disabledOptionExplanation = '',
	...rest
}) => {
	const [inputItems, setInputItems] = useState(options);
	const itemToString = (item?: ComboBoxOption) => (item ? item.name : '');
	const {
		getComboboxProps,
		getInputProps,
		getItemProps,
		getMenuProps,
		getToggleButtonProps,
		highlightedIndex,
		inputValue,
		isOpen,
		openMenu,
		selectItem,
		selectedItem,
	} = useCombobox({
		items: inputItems,
		itemToString: itemToString,
		initialSelectedItem: options.find((item) => item.value === defaultValue),
		onInputValueChange: ({ inputValue }) => {
			setInputItems(options.filter((item) => itemToString(item).toLowerCase().includes(inputValue.toLowerCase())));
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (selectedItem !== null) {
				onChange(selectedItem);
			}
		},
		onStateChange: (state) => {
			// This is better than listening to onBlur on the input because this one is
			// NOT triggered after a click on an item in the list
			if (state.type === useCombobox.stateChangeTypes.InputBlur) {
				const validItem = options.find((item) => item.name.toLowerCase() === inputValue.toLowerCase());
				if (validItem) {
					// Optimization: don't call selectItem() unless the one we have is different from the already selected one
					if (selectedItem?.value !== validItem.value) {
						selectItem(validItem);
					}
				} else {
					// Current input value doesn't look like anything valid so revert it to previous selection
					selectItem(selectedItem);
				}
				onBlur && onBlur();
				// when leaving the combobox we want to reset the list of options, but we call selectItem()
				// which will trigger onInputValueChange() and thus mess with the options displayed...
				// for now, let's work around this with a setTimeout()
				setTimeout(() => {
					setInputItems(options);
				}, 0);
			}
		},
	});

	useEffect(() => {
		setInputItems(options);
		// If a default value was given but there is not selected item it's likely that the options weren't ready yet
		if (!selectedItem?.value && defaultValue) {
			const initialSelectedItem = options.find((item) => item.value === defaultValue);
			selectItem(initialSelectedItem);
		}
	}, [options]);

	return (
		<div className={styles.ComboBoxContainer} {...getComboboxProps()} style={style}>
			<input
				className={styles.ComboBox}
				data-nospacing={noSpacing}
				data-state={state}
				{...getInputProps({
					disabled: disabled,
					placeholder: placeholder,
					onFocus: (event) => {
						if (!isOpen) {
							openMenu();
						}
						onFocus(event);
					},
				})}
				{...rest}
			/>
			<button
				type="button"
				className={styles.ComboBoxToggle}
				{...getToggleButtonProps({ disabled: disabled })}
				aria-label="Toggle menu"
			/>
			<ul className={cn(styles.ComboBoxPopover, { [styles.ComboBoxPopoverOpen]: isOpen })} {...getMenuProps()}>
				{isOpen && (
					<>
						{inputItems.length === 0 ? <em className={styles.ComboBoxItem}>Nothing found</em> : null}
						{inputItems.map((item, index) => (
							<li
								className={styles.ComboBoxItem}
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
					</>
				)}
			</ul>
		</div>
	);
};
