/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: {
				DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
				variant: 'hsl(var(--primary-variant) / <alpha-value>)',
				fg: 'hsl(var(--primary-fg) / <alpha-value>)',
				'fg-variant': 'hsl(var(--primary-fg-variant) / <alpha-value>)'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
				fg: 'hsl(var(--secondary-fg) / <alpha-value>)',
				'fg-variant': 'hsl(var(--secondary-fg-variant) / <alpha-value>)'
			},
			dark: {
				DEFAULT: 'hsl(var(--dark) / <alpha-value>)',
				fg: 'hsl(var(--dark-fg) / <alpha-value>)',
				'fg-variant': 'hsl(var(--dark-fg-variant) / <alpha-value>)'
			},
			light: {
				DEFAULT: 'hsl(var(--light) / <alpha-value>)',
				fg: 'hsl(var(--light-fg) / <alpha-value>)',
				'fg-variant': 'hsl(var(--light-fg-variant) / <alpha-value>)'
			},
			'light-gray': 'hsl(var(--light-gray) / <alpha-value>)',
			'dark-gray': 'hsl(var(--dark-gray) / <alpha-value>)',
			transparent: 'transparent',
			current: 'currentColor'
		}
	},
	plugins: []
};
