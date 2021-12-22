const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'card-bg': 'hsl(216, 50%, 16%)',
			'main-bg': 'hsl(217, 54%, 11%)',
			'line-color': 'hsl(215, 32%, 27%)',
			white: '#fff',
			cyan: 'hsl(178, 100%, 50%)'
		},
		fontFamily: {
			sans: ['Outfit']
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
