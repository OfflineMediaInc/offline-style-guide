import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			offline: {
  				black: '#121212',
  				gold: '#F5B841',
  				'gold-light': '#FFF3DD',
  				gray: {
  					'50': '#f9f9f9',
  					'100': '#f2f2f2',
  					'200': '#e6e6e6',
  					'300': '#d5d5d5',
  					'400': '#b0b0b0',
  					'500': '#909090',
  					'600': '#707070',
  					'700': '#505050',
  					'800': '#333333',
  					'900': '#1a1a1a'
  				}
  			},
  			teal: {
  				'50': '#f0fdfa',
  				'100': '#ccfbf1',
  				'200': '#99f6e4',
  				'300': '#5eead4',
  				'400': '#2dd4bf',
  				'500': '#14b8a6',
  				'600': '#0d9488',
  				'700': '#0f766e',
  				'800': '#115e59',
  				'900': '#134e4a',
  				'950': '#042f2e'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-satoshi)',
  				'Satoshi',
  				'Inter',
  				'Helvetica Neue"',
  				'Arial',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-cabinet-grotesk)',
  				'Cabinet Grotesk',
  				'var(--font-satoshi)',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-dm-mono)',
  				'DM Mono"',
  				'SFMono-Regular',
  				'Menlo',
  				'monospace'
  			],
  			'cal-sans': [
  				'var(--font-cal-sans)'
  			],
  			Dancing_Script: [
  				'var(--font-dancing-script)',
  				'cursive'
  			]
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn 0.3s ease-in-out'
  		}
  	}
  },
  plugins: [tailwindcssAnimate, typography],
}

export default config
