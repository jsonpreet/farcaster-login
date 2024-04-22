const colors = require('tailwindcss/colors')
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				border: 'border 4s ease infinite',
			},
			keyframes: {
				border: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
