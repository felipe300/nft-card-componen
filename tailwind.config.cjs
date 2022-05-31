module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'sp': '0px 0px 30px 5px rgba(0, 0, 0, 0.749)',
			}
		},
		colors: {
			"white": "#ffffff",
			"Soft-blue": "#8bacda",
			"Cyan": "#00fff7",
			"dark-blue-main": "#0d192b",
			"dark-blue-card": "#14253d",
			"dark-blue-line": "#2f415b",
		}
	},
	plugins: [],
}
