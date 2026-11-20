import adapter from '@sveltejs/adapter-node';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			// English lives at `/`, German at `/de`. The first-visit redirect lives in hooks.server.ts.
			strategy: ['url', 'cookie', 'preferredLanguage', 'baseLocale']
		}),
		sveltekit({ adapter: adapter() })
	]
});
