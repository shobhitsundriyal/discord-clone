module.exports = {
	//mode: 'jit', otherwise not reflecting changes on save, but now can't use customvalues in utility classes
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				discord_blue: '#295DE7',
				discord_blurple: '#7289da',
				discord_purple: '#5865f2',
				discord_green: '3ba55c',
			},
			height: {
				'87vh': '87vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
