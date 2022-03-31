const { defaultTheme } = require("react-select");

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors:{
				firmingleOrange:'#FF8555',
			},
			fontFamily:{
				'Nunito':'Nunito Sans',
			},
		},
	},
	plugins: [],
};
