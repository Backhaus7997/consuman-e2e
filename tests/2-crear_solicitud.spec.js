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
  await page.getByRole('button', { name: /^Crear$/ }).click();

  const categoriaSearch = page.locator('input[aria-label="Buscar"].dx-texteditor-input');

  try {
     await categoriaSearch.waitFor({ state: 'visible', timeout: 5000 });

     await categoriaSearch.fill('Categoría Prueba');

     const opcionVisible = page.getByText('Categoría Prueba');
    
     await opcionVisible.first().waitFor({ state: 'visible', timeout: 5000 });

     await opcionVisible.first().click();

} catch (e) {
}

  await page.locator('input[name="title"]').fill('Tests finales');
  
  await page.locator("input[name='inProgress']").click();
  // Abrí el campo "Activo"
  await page.getByRole('combobox', { name: /^Activo$/ }).click() ;

  // En el panel lateral, buscá y elegí ACTIVO_TEST
  const panel = page.locator('.dx-overlay-content, .MuiDrawer-root').last();
  await panel.locator('input[aria-label="Buscar"]').fill('ACTIVO_TEST');
  await page.getByText('ACTIVO_TEST').click();

  // (si pide confirmar la selección)
  //await panel.getByRole('button', { name: /Guardar cambios/ }).first().click().catch(() => {});

  const fecha = page.getByPlaceholder('DD/MM/YYYY');
  await fecha.waitFor({ state: 'visible' });
  await fecha.click();
  await fecha.type('18112025');

  await page.getByText('Crear solicitud de trabajo').click();
});