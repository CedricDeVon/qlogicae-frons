import { expect, test } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
	await page.goto('http://localhost:4173');

	await expect(page).toHaveTitle(/.+/);
});
