/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: [],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
