import { defineConfig } from '@playwright/test';

export default defineConfig({
	// Keep Playwright tests isolated in `e2e/` so unit tests (vitest) aren't picked up.
	testDir: 'src/test/e2e',
});
