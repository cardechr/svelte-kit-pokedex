import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],
	kit: {
		paths: {
			base: dev ? '' : '/svelte-kit-pokedex'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		  }),
		vite: {
			plugins: [
				WindiCSS(),
			]
		}
	},
};

export default config;
