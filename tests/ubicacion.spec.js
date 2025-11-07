import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('ovillalon@consuman.com');
  await page.waitForTimeout(2000);

  await page.getByLabel('Password').fill('Villalon1920#');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
}

test('login', async ({ page }) => {
  await page.goto('https://ambitious-flower-079bde70f.5.azurestaticapps.net/');
  
  await handleLogin(page);

  await page.waitForTimeout(3000);
});