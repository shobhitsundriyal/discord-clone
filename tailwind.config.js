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
				discord_green: '#3ba55c',
				discord_serverBg: '#36393f',
				discord_serverListBg: '#202225',
				discor_channelsBg: '#2f3136',
				discord_channelHover: '#34373c',
				discord_channelText: '#8e9297',
				discord_userSec: '#292b2f',
				chat_bg: '#36393f',
				chatHeader: '#72767d',
				chatInputBg: '#40444b',
				chatInputText: '#dcddde',
				chatHoverBg: '#32353b',
			},
			height: {
				'87vh': '87vh',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
