import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('mmorillas@consuman.com');
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

  await page.getByText('Activos').click();

  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Nuevo Activo' }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('combobox', { name: 'Tipo' }).fill('Playwright');

  await page.getByRole('option', { name: 'Playwright' }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Nombre' }).fill('Playwright prueba');

  await page.waitForTimeout(1000);

  await page.locator('.ql-editor').fill('Nota Prueba 0303');

  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Clave' }).fill('030303');

  await page.waitForTimeout(2000);

  
  const ubicacion = page.locator('input[role="combobox"][value="Locations"]');
  await ubicacion.click();
  await page.waitForSelector('input[role="textbox"][aria-label="Buscar"]', { state: 'visible', timeout: 5000 });

  const buscador = page.locator('input[role="textbox"][aria-label="Buscar"]');
  await buscador.fill('Cordoba');
  await page.waitForTimeout(2000);
 
  await buscador.press('Enter');

 
  try {
    await page.getByText('Cordoba', { exact: true }).click({ timeout: 2000 });
  } catch (e) {
  }

  await page.waitForTimeout(2000);

  await page.getByText('Crear activo').click();

  await page.waitForTimeout(2000);
});