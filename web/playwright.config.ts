import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'bun run source:build-release && bun run preview:run-release',
		port: 4173
	},
	testDir: './test/v1/e2e',
	testMatch: '**/*.test.ts'
});
