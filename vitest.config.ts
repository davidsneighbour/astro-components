import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: ['node_modules', 'dist', 'src/test/**', 'src/test/e2e'],
	},
});
