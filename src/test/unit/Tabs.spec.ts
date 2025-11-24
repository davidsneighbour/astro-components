import { test, expect } from '@playwright/test';

test('Tabs page renders groups and details content', async ({ page }) => {
	await page.goto('/test/tabs/');

	// Page header is present
	await expect(page.getByRole('heading', { name: 'Tabs test page' })).toBeVisible();

	// There should be multiple "Recent Tracks" summaries across the page
	const recent = page.getByText('Recent Tracks');
	await expect(recent).toHaveCount(3);

	// Each first detail in a group is open and shows the "Your recent tracks:" paragraph
	const recentParagraphs = page.getByText('Your recent tracks:');
	await expect(recentParagraphs).toHaveCount(3);
	for (const p of await recentParagraphs.all()) {
		await expect(p).toBeVisible();
	}

	// Click the first "Loved tracks" summary (the second tab in the first group) and assert its content becomes visible
	const lovedSummary = page.getByText('Loved tracks').first();
	await lovedSummary.click();
	const lovedContent = page.getByText('Tracks you loved:').first();
	await expect(lovedContent).toBeVisible();
});
