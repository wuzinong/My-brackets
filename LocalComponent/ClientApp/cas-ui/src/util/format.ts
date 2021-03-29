/** Formats a number as currency (Euros). */
export function formatCurrency(amount: number): string {
	return `€ ${amount.toFixed(2)}`;
}

/** Formats a date. */
export function formatDate(value: Date): string {
	const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `${monthAbbreviations[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`;
}
