const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				//! Neutral
				almostWhite: 'hsl(0, 0%, 98%)',
				mediumGray: 'hsl(0, 0%, 41%)',
				almostBlack: 'hsl(0, 0%, 8%)'
			},
			fontFamily: {
				epilogue: ['"Epilogue"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
