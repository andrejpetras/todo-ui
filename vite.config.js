import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		proxy: {
		  "/api": {
			target: "http://localhost:8088",
			changeOrigin: true,
			secure: false,
			// rewrite: (path) => path.replace(/^\/api/, ""),
		  },
		},
	  },	
	plugins: [sveltekit()]
};

export default config;
