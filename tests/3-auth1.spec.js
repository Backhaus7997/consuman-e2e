import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLoginAuth1(page) {
  await page.getByLabel('Email').fill('authorizer1@consuman.com');
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('auth1', async ({ page }) => {
  await page.goto('http://localhost:3030');
  await handleLoginAuth1(page);

  await page.getByText('Solicitudes De Trabajo').click()
  await page.locator('.dx-datagrid-rowsview').waitFor();
  await page.locator('.dx-datagrid-rowsview button[aria-label="Autorizar"]:visible').first().click();

  await page.locator('input[name="authorized"][type="checkbox"]').setChecked(true, { force: true });
  await page.waitForTimeout(2000);

  await page.locator('textarea[name="notes"]').fill('autorizado automatico');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Guardar Cambios' }).click();
  await page.waitForTimeout(2000);
});
