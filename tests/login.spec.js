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

  await page.getByText('Activos').click();

  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Nuevo Activo' }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('combobox', { name: 'Tipo' }).fill('Aire Acondicionado');

  await page.getByRole('option', { name: 'Aire Acondicionado' }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Nombre' }).fill('Activo Prueba');

  await page.waitForTimeout(1000);

  await page.locator('.ql-editor').fill('Nota Prueba 0303');

  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Clave' }).fill('030303');

  await page.waitForTimeout(2000);

  const dateField = page.locator('input[placeholder="DD/MM/YY hh:mm"]');
  await dateField.click({ position: { x: 10, y: 10 } });
  await page.keyboard.type('0611250025');

  await page.waitForTimeout(2000);

  await page.locator('input[value="ARGENTINA"]').click();
  await page.waitForTimeout(1000);

  await page.getByRole('textbox', { name: 'Buscar' }).fill('Almacen Central Bs As');
  await page.waitForTimeout(1000);

  await page.getByText('Almacen Central Bs As').click();

  await page.waitForTimeout(2000);
});