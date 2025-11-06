// @ts-check
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://ambitious-flower-079bde70f.5.azurestaticapps.net/');

  // Fill in username and password fields
  await page.getByLabel('Email').fill('ovillalon@consuman.com');

  await page.waitForTimeout(2000);

  await page.getByLabel('Password').fill('Villalon1920#');

  await page.waitForTimeout(2000);

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();
});