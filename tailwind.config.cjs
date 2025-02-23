// /** @type {import(tailwindcss').Config */
/* {
    module.exports = {
        important: true,
        theme: {
            fontFamily: {
                'theme-f1': ['"Oswald"', "sans-serif"],
                'theme-f2': ['"Lora"', "serif"],
                'theme-f3': ['"Bebas Kai"', "sans-serif"],
                'theme-f4': ['"Open Sans"', "sans-serif"],
            },
            extend: {
                fontSize: {
                    '7xl': '7rem',
                },
                colors: {
                    'theme-c1': '#006c32',
                    'theme-c1-b': '#6c8213',
                    'theme-c2': '#000000',
                    'theme-c3': '#ffffff',
                }
            },
        },
        variants: {
            letterSpacing: ['responsive', 'hover', 'focus'],
        },
        plugins: [],
    }
} */

module.exports = {
	important: true,
	theme: {
		fontFamily: {
			sans: ["Inter Tight", "Arial", "sans-serif"]
		},
		extend: {
			fontFamily: {
				main: ["Arial", "sans-serif"]
			}
		}
	}
};
