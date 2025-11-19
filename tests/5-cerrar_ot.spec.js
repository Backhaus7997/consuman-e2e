import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('admin@consuman.com');
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('cerrar_ot', async ({ page }) => {
  await page.goto('http://localhost:3030');
  await handleLogin(page);

  await page.getByText('Ordenes de Trabajo').click();
  await page.locator('.dx-datagrid-rowsview').waitFor();
await page
  .locator('.dx-datagrid-content-fixed tbody tr[aria-rowindex="2"] .MuiButtonGroup-root button[aria-label="Editar"]')
  .first()
  .click({ force: true });
  await page.locator('button:has(svg.iconify--mingcute)').nth(1).click();
  await page.locator('input[role="combobox"][aria-autocomplete="list"]').last().fill('Authorizer1');
  await page.locator('li[role="option"]:has-text("Authorizer1")').first().click();
  await page.getByRole('button', { name: 'Guardar Cambios' }).click();
  await page.locator('button:has(svg.iconify--mingcute)').nth(1).click();
  await page.locator('input[role="combobox"][aria-autocomplete="list"]').last().fill('Authorizer2');
  await page.locator('li[role="option"]:has-text("Authorizer2")').first().click();
  await page.getByRole('button', { name: 'Guardar Cambios' }).click();

  await page.locator('button[aria-label="Finalizar"]').last().click();
  await page.locator('button[aria-label="Cancelar"]').click();

    // segunda tarea de cierre
await page
  .locator('.dx-datagrid-content-fixed tbody tr[aria-rowindex="3"] .MuiButtonGroup-root button[aria-label="Editar"]')
  .first()
  .click({ force: true });
  await page.locator('button:has(svg.iconify--mingcute)').nth(1).click();
  await page.locator('input[role="combobox"][aria-autocomplete="list"]').last().fill('Authorizer1');
  await page.locator('li[role="option"]:has-text("Authorizer1")').first().click();
  await page.getByRole('button', { name: 'Guardar Cambios' }).click();
  await page.locator('button:has(svg.iconify--mingcute)').nth(1).click();
  await page.locator('input[role="combobox"][aria-autocomplete="list"]').last().fill('Authorizer2');
  await page.locator('li[role="option"]:has-text("Authorizer2")').first().click();
  await page.getByRole('button', { name: 'Guardar Cambios' }).click();

  await page.locator('button[aria-label="Finalizar"]').last().click();
  await page.locator('button[aria-label="Cancelar"]').click();

});