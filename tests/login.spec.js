import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('admin@consuman.com');
  await page.waitForTimeout(2000);

  await page.getByLabel('Password').fill('123');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
}

test('login', async ({ page }) => {
  await page.goto('localhost:3030');
  
  await handleLogin(page);

  await page.waitForTimeout(3000);
});