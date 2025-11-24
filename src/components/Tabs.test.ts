// @vitest-environment node
import { describe, it, expect } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

describe('Tabs component (source checks)', () => {
	it('component file exists and contains expected details/summary sections', async () => {
		const testDir = path.dirname(fileURLToPath(import.meta.url));
		const componentPath = path.join(testDir, 'Tabs.astro');
		const src = await fs.readFile(componentPath, 'utf8');

		// Ensure the component contains details/summary markup
		expect(src.includes('<details')).toBe(true);
		expect((src.match(/<summary>/g) || []).length).toBeGreaterThanOrEqual(3);
		expect((src.match(/Recent Tracks/g) || []).length).toBeGreaterThanOrEqual(3);
	});

	it('only uses inline style attributes for CSS custom properties', async () => {
		const testDir = path.dirname(fileURLToPath(import.meta.url));
		const componentPath = path.join(testDir, 'Tabs.astro');
		const src = await fs.readFile(componentPath, 'utf8');

		// Collect any inline style attribute values and assert they set CSS variables (e.g. "--n: 1")
		const styleAttrs = [...src.matchAll(/style="([^"]*)"/g)].map((m) => m[1]);
		expect(styleAttrs.length).toBeGreaterThan(0);
		for (const s of styleAttrs) {
			expect(/--[a-zA-Z0-9-_]+\s*:\s*/.test(s)).toBe(true);
		}
	});
});
