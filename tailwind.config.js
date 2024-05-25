/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
			fontWeight: {
				'extra-black': '1000' // Custom font weight
			}
		},
	},
	plugins: [],
}
