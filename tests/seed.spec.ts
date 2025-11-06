import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('navigate to conference videos', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Esperar 2 segundos
    await page.waitForTimeout(2000);
    
    // Click the community button 
    await page.click('text=Community');
    
    // Esperar 2 segundos
    await page.waitForTimeout(2000);
    
    // Click the Conference Videos link
    await page.click('text=Conference Videos');
    
    // Esperar 2 segundos
    await page.waitForTimeout(2000);
    
    // Verify we're on the conference videos page
    await expect(page).toHaveURL(/.*conference-videos/);
  });
});
