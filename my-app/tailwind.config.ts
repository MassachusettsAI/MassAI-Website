import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	important: true,
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		screens: {
			"sm": "640px",
			"md": "768px",
			'mlg': '850px',
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px"
		},
		extend: {
			colors: {
				'umass-maroon': '#881c1c',
				'umass-black': '#212721',
				'umass-maroon-light': '#ff7a7a',
				'umass-black-light': '#808880',
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				slate: {
					50: 'oklch(0.984 0.003 247.858)',
					75: 'oklch(0.980 0.004 247.868)',
					100: 'oklch(0.976 0.005 247.877)',
					125: 'oklch(0.972 0.006 247.886)',
					150: 'oklch(0.968 0.007 247.896)',
					175: 'oklch(0.958 0.009 249.799)',
					200: 'oklch(0.949 0.010 251.702)',
					225: 'oklch(0.939 0.011 253.605)',
					250: 'oklch(0.929 0.013 255.508)',
					275: 'oklch(0.914 0.015 254.855)',
					300: 'oklch(0.899 0.017 254.201)',
					325: 'oklch(0.884 0.020 253.548)',
					350: 'oklch(0.869 0.022 252.894)',
					375: 'oklch(0.828 0.026 253.868)',
					400: 'oklch(0.786 0.031 254.841)',
					425: 'oklch(0.745 0.036 255.815)',
					450: 'oklch(0.704 0.040 256.788)',
					475: 'oklch(0.666 0.042 256.945)',
					500: 'oklch(0.629 0.043 257.102)',
					525: 'oklch(0.592 0.044 257.260)',
					550: 'oklch(0.554 0.046 257.417)',
					575: 'oklch(0.527 0.045 257.383)',
					600: 'oklch(0.500 0.044 257.349)',
					625: 'oklch(0.473 0.044 257.315)',
					650: 'oklch(0.446 0.043 257.281)',
					675: 'oklch(0.427 0.043 257.283)',
					700: 'oklch(0.409 0.043 257.284)',
					725: 'oklch(0.391 0.044 257.285)',
					750: 'oklch(0.372 0.044 257.287)',
					775: 'oklch(0.349 0.043 257.973)',
					800: 'oklch(0.326 0.042 258.659)',
					825: 'oklch(0.302 0.042 259.345)',
					850: 'oklch(0.279 0.041 260.031)',
					875: 'oklch(0.261 0.041 261.462)',
					900: 'oklch(0.243 0.042 262.893)',
					925: 'oklch(0.226 0.042 264.324)',
					950: 'oklch(0.208 0.042 265.755)',
					975: 'oklch(0.188 0.042 265.490)',
					1000: 'oklch(0.168 0.042 265.225)',
					1025: 'oklch(0.149 0.042 264.960)',
					1050: 'oklch(0.129 0.042 264.695)',
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				fraunces: [
					'IBM Plex Sans',
					// 'Fraunces',
					'serif'
				],
				sans: [
					'Inter var',
					'Inter',
					...fontFamily.sans  // This spreads the default system fonts
				],
			},
		}
	},
};

export default config;
