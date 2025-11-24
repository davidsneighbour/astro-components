import { test, expect } from '@playwright/test';

test('smoke test', async ({ page }) => {
	// Basic smoke check - nothing to load, just ensure Playwright runner executes.
	expect(true).toBe(true);
});
