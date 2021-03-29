module.exports = {
	extends: ['stylelint-config-recommended', 'stylelint-config-recommended-scss'],
	plugins: ['stylelint-scss'],
	rules: {
		'selector-pseudo-class-no-unknown': [
			true,
			{
				// Specific to CSS modules
				ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external'],
			},
		],
		'no-descending-specificity': null,
		'no-empty-source': null,
		'indentation': ['tab']
	},
};
