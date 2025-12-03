import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using adapter-vercel with explicit Node 20 runtime
		adapter: adapter({
			runtime: 'nodejs20.x'
		}),
		alias: {
			'@': 'src'
		}
	}
};

export default config;
