import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('claims@consuman.com');
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('crear_solicitud', async ({ page }) => {
  await page.goto('http://localhost:3030');
  await handleLogin(page);
  await page.getByText('Solicitudes De Trabajo').click()
  await page.locator('.dx-datagrid-content-fixed tbody tr[aria-rowindex="1"] .MuiButtonGroup-root button').first().click();
  await page.locator('label:has-text("4 Estrellas")').first().click();   // Seguridad = 4
  await page.locator('label:has-text("3 Estrellas")').nth(1).click();    // Calidad = 3
  await page.locator('textarea[name="notes"]').fill('Prueba Notas');     // Notas
  await page.getByRole('button', { name: 'Guardar Cambios' }).click();
  });