import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('claims@consuman.com');
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('cerrar_ot', async ({ page }) => {
  await page.goto('http://localhost:3030');
  await handleLogin(page);

  await page.getByText('Solicitudes De Trabajo').click()

});