import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('admin@consuman.com');
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('login', async ({ page }) => {
  await page.goto('http://localhost:3030');
  await handleLogin(page);
  await page.getByText('Solicitudes De Trabajo').click()
  await page.getByRole('button', { name: /^Crear$/ }).click();
  await page.locator('input[name="title"]').fill('Solicitud Prueba');
  await page.waitForTimeout(2000); 
  // Abrí el campo "Activo"
  await page.getByRole('combobox', { name: /^Activo$/ }).click() ;

  // En el panel lateral, buscá y elegí ACTIVO_NOMBRE
  const panel = page.locator('.dx-overlay-content, .MuiDrawer-root').last();
  await panel.locator('input[aria-label="Buscar"]').fill('ACTIVO_NOMBRE');
  await page.getByText('ACTIVO_NOMBRE').click();
  await page.waitForTimeout(2000);

  // (si pide confirmar la selección)
  //await panel.getByRole('button', { name: /Guardar cambios/ }).first().click().catch(() => {});


  const fecha = page.getByPlaceholder('DD/MM/YYYY');
  await fecha.waitFor({ state: 'visible' });
  await fecha.click();
  await page.waitForTimeout(1000);
  await fecha.type('14112025');


  
  await page.getByText('Crear solicitud de trabajo').click();
  await page.waitForTimeout(5000);
});