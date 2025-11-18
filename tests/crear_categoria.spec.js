import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('admin@consuman.com');

  await page.getByLabel('Password').fill('123');

  await page.getByRole('button', { name: 'Login' }).click();
}

test('crear_categoria', async ({ page }) => {
  await page.goto('http://localhost:3030');
  
  await handleLogin(page);

  await page.getByText('Categorías').click();

  await page.locator('input[name="name"]').fill('Categoría Prueba');

  await page.getByText('Autorización').click();

  await page.getByText('Nuevo').click();

  await page.getByRole('button', { name: /b[úu]squeda avanzada/i }).click();
  await page.waitForTimeout(2000);

  const filter = page.getByRole('textbox', { name: 'Celda de filtro' }).first();
  await filter.click();
  await filter.fill('Authorizer1');
  await page.waitForTimeout(2000);
  await page.locator('.dx-datagrid-rowsview .dx-data-row').first().waitFor();
  await page.locator('.dx-datagrid-rowsview .dx-data-row td.dx-command-select [role="checkbox"]').first().click();

  await page.getByRole('button', { name: /^Agregar$/ }).click();

  await page.getByRole('button', { name: 'Guardar Cambios' }).click();

  await page.getByText('Nuevo').click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: /b[úu]squeda avanzada/i }).click();
  await page.waitForTimeout(2000);

  const filter2 = page.getByRole('textbox', { name: 'Celda de filtro' }).first();
  await filter.click();
  await filter.fill('Authorizer2');
  await page.waitForTimeout(2000);
  await page.locator('.dx-datagrid-rowsview .dx-data-row').first().waitFor();
  await page.locator('.dx-datagrid-rowsview .dx-data-row td.dx-command-select [role="checkbox"]').first().click();

  await page.getByRole('button', { name: /^Agregar$/ }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Guardar Cambios' }).click();
  await page.waitForTimeout(2000);

  await page.getByText('Tareas por defecto').click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: /^Nuevo$/ }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: /b[úu]squeda avanzada/i }).click();
  await page.waitForTimeout(2000);  

  const filter3 = page.getByRole('textbox', { name: 'Celda de filtro' }).first();
  await filter.click();
  await filter.fill('TAREA PRUEBA1');
  await page.waitForTimeout(2000);
  await page.locator('.dx-datagrid-rowsview .dx-data-row').first().waitFor();
  await page.locator('.dx-datagrid-rowsview .dx-data-row td.dx-command-select [role="checkbox"]').first().click();

  await page.getByRole('button', { name: /^Agregar$/ }).click();

  await page.getByRole('button', { name: 'Guardar Cambios' }).click();

  await page.getByRole('button', { name: /^Nuevo$/ }).click();

  await page.getByRole('button', { name: /b[úu]squeda avanzada/i }).click();
  await page.waitForTimeout(2000);  

  const filter4 = page.getByRole('textbox', { name: 'Celda de filtro' }).first();
  await filter.click();
  await filter.fill('TAREA PRUEBA2');
  await page.waitForTimeout(2000);
  await page.locator('.dx-datagrid-rowsview .dx-data-row').first().waitFor();
  await page.locator('.dx-datagrid-rowsview .dx-data-row td.dx-command-select [role="checkbox"]').first().click();

  await page.getByRole('button', { name: /^Agregar$/ }).click();

  await page.getByRole('button', { name: 'Guardar Cambios' }).click();

  await page.getByText('Generar OT').click();
  await page.waitForTimeout(2000);

  await page.locator('input[name="generateWO"][type="checkbox"]').setChecked(true, { force: true });
  await page.waitForTimeout(2000);

  await page.getByRole('heading', { level: 5, name: 'Conformidades' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: /^Nuevo$/ }).click();

  const combo = page.getByRole('combobox').first();
  await combo.click();
  await combo.fill('Seguridad');
  await page.locator('[role="listbox"] [role="option"]').first().click();
  await page.waitForTimeout(2000);
  await combo.fill('Calidad');
  await page.locator('[role="listbox"] [role="option"]').first().click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Guardar Cambios' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Crear categoría' }).click();
  await page.waitForTimeout(2000);
});

